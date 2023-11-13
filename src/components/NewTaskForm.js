import React from "react";

function NewTaskForm({formData, taskFormOnChange, categories, onTaskFormSubmit}) 
{  
  const renderOption=categories.map(individualCategory =>
    {
      if(individualCategory !== "All")
      {
        return(
          <option key={individualCategory} value={individualCategory}>{individualCategory}</option>
        )
      }
    })
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={taskFormOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={taskFormOnChange}>
          {/* render <option> elements for each category here */}
          {renderOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
