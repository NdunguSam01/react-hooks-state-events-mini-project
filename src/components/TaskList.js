import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) 
{
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) =>
      {
        let {text, category}= task
        return (
          <Task key={text} text={text} category={category} deleteTask={deleteTask}/>
        )
      })}
    </div>
  );
}

export default TaskList;
