import React, { useState } from "react";
import "./App.css";

// Main App component
function App() {
  // State to store the tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update an existing task
  const updateTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
}

// TaskList component to display the list of tasks
function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onUpdate={(newTask) => onUpdate(index, newTask)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

// TaskItem component to display individual tasks
function TaskItem({ task, onUpdate, onDelete }) {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the current value of the task being edited
  const [value, setValue] = useState(task);

  // Function to handle updating the task
  const handleUpdate = () => {
    if (value.trim() === "") return;
    onUpdate(value);
    setIsEditing(false);
  };

  // If in editing mode, display input and buttons for saving or canceling
  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }

  // If not in editing mode, display the task with Edit and Delete buttons
  return (
    <li>
      {task} <button onClick={() => setIsEditing(true)}>Edit</button>{" "}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

// TaskForm component for adding new tasks
function TaskForm({ onSubmit }) {
  // State to manage the value of the input field
  const [value, setValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;
