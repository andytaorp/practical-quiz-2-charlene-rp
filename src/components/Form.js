import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1); 

  function handleAddTask(newTask) {
    onAddTask(newTask); 
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    const newTask = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      completed: false, 
    };

    handleAddTask(newTask); 
    setDescription(""); 
    setQuantity(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          min="1"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
