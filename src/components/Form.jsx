import React, { useState } from "react";

const Form = ({ setToDoTasks, toDoTasks }) => {
  const [inputField, setInputField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputField) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: inputField,
      isCompleted: false,
    };
    setToDoTasks((prev) => {
      return [...prev, newTask];
    });
    const updatedTodo = JSON.stringify([...toDoTasks, newTask]);
    localStorage.setItem("todos", updatedTodo);
    setInputField("");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="task-input"
        name="todo"
        type="text"
        placeholder="Write your next task"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
      />
      <button className="add-task-btn">+</button>
    </form>
  );
};

export default Form;
