import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")


  //Handle Delete when button is clicked
  function handleDelete(text){
    const taskDelete = tasks.filter(task => task.text !== text)
    setTasks(taskDelete)
    console.log(text)
  }

  //Category button display filter
  const displayTasks = tasks
  .filter(task => selectedCategory === "All" || task.category === selectedCategory)

  function handleClick(e){
    setSelectedCategory(e.target.value)
    console.log(selectedCategory)
  }

  //Update state and render new list
  function handleItemFormSubmit(newTask) {
    setTasks([...TASKS, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleItemFormSubmit} />
      <TaskList tasks={displayTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
