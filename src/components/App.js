import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

const handleDeleteTask = (deletedTask)  =>{
  const filteredTasks = tasks.filter((task) => deletedTask.text !== task.text)
  setTasks(filteredTasks);
}

const onTaskFormSubmit = (newTask) => {
  setTasks([...tasks, newTask])
}

const handleCategoryFilter = (selectedCategory) => {
  if (selectedCategory === "All") {
    setTasks(TASKS);
  } else {
    const filteredTasks = TASKS.filter((task) => task.category === selectedCategory);
    setTasks(filteredTasks);
  }
};

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} categories={categories} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
