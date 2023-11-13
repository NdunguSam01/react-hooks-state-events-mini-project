import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() 
{

  const [tasks, setTasks]=useState(TASKS)

  const [formData, setformData]=useState(
    {
      text: "",
      category: ""
    })

  const taskFormOnChange = (e) =>
  {
    const value= e.target.value
    const key= e.target.name

    setformData({...formData,
      [key]: value
    })
  }

  const onTaskFormSubmit = (e) =>
  {
    e.preventDefault()
    let {text, category} = formData
    setTasks([...tasks, {text, category}])
    
  }

  const deleteTask = (text) =>
  {
    const taskFilter=tasks.filter((task) => task.text !== text)
    setTasks(taskFilter)
  }

  const categoryButtonClick = ( category) =>
  {
    if(category === "All")
    {
      setTasks(tasks)
    }
    else
    {
      const categoryFilter=tasks.filter(task => task.category === category)
      setTasks(categoryFilter)
    }
    
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryButtonClick={categoryButtonClick}/>
      <NewTaskForm formData={formData} taskFormOnChange={taskFormOnChange} categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
