import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
