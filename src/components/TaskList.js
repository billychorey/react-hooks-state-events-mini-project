import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDeleteTask}) {



  
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task task={task} text={task.text} category={task.category} key={task.text} handleDeleteTask={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
