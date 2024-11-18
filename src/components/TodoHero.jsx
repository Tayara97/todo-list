const TodoHero = ({ toDoTasks }) => {
  const totalTasks = toDoTasks.length;
  const tasksFinished = toDoTasks?.filter((task) => {
    return task?.isCompleted;
  });

  return (
    <div className="hero">
      <div>
        <p className="text-lg">Task Done</p>
        <p className="text-sm">Keep it up </p>
      </div>
      <div className="tasks-num">
        {tasksFinished.length}/{totalTasks}
      </div>
    </div>
  );
};

export default TodoHero;
