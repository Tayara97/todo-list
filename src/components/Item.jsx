import { useEffect, useRef, useState } from "react";
import trash_icon from "../assets/delete.svg";
import edit_icon from "../assets/edit_icon.svg";

const Item = ({ task, onClick, handledeleteTask, setToDoTasks, toDoTasks }) => {
  const [editing, setediting] = useState(false);
  const inputref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setediting(false);
  };

  const handleInputChange = (e) => {
    setToDoTasks((prev) => {
      return prev.map((prevTask) => {
        return prevTask.id === task.id
          ? { ...prevTask, title: e.target.value }
          : prevTask;
      });
    });
    const updatedTodo = JSON.stringify(
      toDoTasks.map((prevTask) => {
        return prevTask.id === task.id
          ? { ...prevTask, title: e.target.value }
          : prevTask;
      })
    );

    localStorage.setItem("todos", updatedTodo);
  };
  const handleEditTask = () => {
    setediting(true);
  };
  useEffect(() => {
    if (editing && inputref.current) {
      inputref.current.focus();
    }
  }, [editing]);
  return (
    <li className="todo-item">
      {editing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            className="editing-input"
            type="text"
            ref={inputref}
            value={task?.title}
            onBlur={() => setediting(false)}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
      ) : (
        <>
          <div className="todo-items-left">
            <button onClick={() => onClick(task)}>
              <svg height="24" width="24">
                <circle
                  cx="11.998"
                  cy="11.998"
                  fillRule="nonzero"
                  fill={task?.isCompleted ? "#4CAF50" : "none"}
                  stroke="#4CAF50"
                  r="9.998"
                />
              </svg>
              <p
                style={
                  task?.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task?.title}
              </p>
            </button>
          </div>
          <div className="todo-items-right">
            <button onClick={handleEditTask}>
              <img className="edit-icon" src={edit_icon} alt="edit" />
            </button>
            <button onClick={() => handledeleteTask(task)}>
              <img src={trash_icon} alt="delete" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Item;
