import React from "react";
import Item from "./Item.jsx";

const ToDoList = ({ toDoTasks, onClick, handledeleteTask, setToDoTasks }) => {
  return (
    <ol>
      {toDoTasks.map((task) => {
        return (
          <Item
            key={task?.id}
            task={task}
            onClick={onClick}
            handledeleteTask={handledeleteTask}
            setToDoTasks={setToDoTasks}
            toDoTasks={toDoTasks}
          />
        );
      })}
    </ol>
  );
};

export default ToDoList;
