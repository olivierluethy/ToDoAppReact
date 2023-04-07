import React, { useState } from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editId, editInput);
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              {task.text}
              <button
                onClick={() => {
                  setEditId(task.id);
                  setEditInput(task.text);
                }}
              >
                Edit
              </button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
