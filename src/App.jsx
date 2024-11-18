import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import TodoHero from "./components/TodoHero.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [toDoTasks, setToDoTasks] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("todos");

    if (storedData) {
      setToDoTasks(JSON.parse(storedData));
    }
  }, []);

  const deleteTask = (currenttask) => {
    setToDoTasks((prev) => {
      return prev.filter((task) => {
        return task.id !== currenttask.id;
      });
    });
    const updatedTodo = JSON.stringify(
      toDoTasks.filter((task) => {
        return task.id !== currenttask.id;
      })
    );
    localStorage.setItem("todos", updatedTodo);
  };
  const handleCompletedTask = (currenttask) => {
    setToDoTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return currenttask.id === task.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      });
    });
    const updatedTodo = JSON.stringify(
      toDoTasks.map((task) => {
        return task.id === currenttask.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      })
    );
    localStorage.setItem("todos", updatedTodo);
  };

  return (
    <div className="container">
      <Header />
      <TodoHero toDoTasks={toDoTasks} />
      <Form setToDoTasks={setToDoTasks} toDoTasks={toDoTasks} />
      {toDoTasks.length === 0 && (
        <p className="empty-list">seems lonely in here, what are you up to? </p>
      )}
      <ToDoList
        toDoTasks={toDoTasks}
        setToDoTasks={setToDoTasks}
        onClick={handleCompletedTask}
        handledeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
