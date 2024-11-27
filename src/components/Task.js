import React from "react";

// /**
//  * TODO: implement the Task component
//  * @function Task
//  * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
//  */

function Task({ task, onToggleTask, onDeleteTask }) {
  const taskStyle = task.completed ? { textDecoration: "line-through" } : {};

  return (
    <div>
      <label style={taskStyle}>
        <input
          type="checkbox"
          checked={task.completed} 
          onChange={() => onToggleTask(task.id)} 
        />
        {task.description} x {task.quantity}
      </label>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;

