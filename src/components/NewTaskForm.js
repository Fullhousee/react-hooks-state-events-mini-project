import React, { useState } from "react";
import { v4 as uuid } from "uuid"

function NewTaskForm({onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text,
      category,
    });
  }

  function handleTextChange(e){
    setText(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
          <select
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Code">Code</option>
            <option value="Food">Food</option>
            <option value="Money">Money</option>
            <option value="Misc">Misc</option>
          </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
