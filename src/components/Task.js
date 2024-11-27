import React from "react";

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

