import React from "react";

function Task({text, category,handleDeleteTask}) {

  const handleDelete = () => {
    const newTask = {
      text: text,
      category: category
    }
    handleDeleteTask(newTask)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete}className="delete">X</button>
    </div>
  );
}

export default Task;
