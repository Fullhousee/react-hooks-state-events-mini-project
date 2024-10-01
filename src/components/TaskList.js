import React, {useState} from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete}) {
  // const [selectedCategory, setSelectedCategory] = useState("")

  // const taskDisplay = tasks
  // .filter(task => selectedCategory === "All" || item.category === selectedCategory)


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;
