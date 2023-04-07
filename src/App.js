import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { onValue, push, ref, remove, update } from "firebase/database";
import { db, dbRef } from "./firebase";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the Firebase Realtime Database
  useEffect(() => {
    const fetchData = () => {
      const tasksRef = ref(db, "tasks");
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        const taskList = [];
        for (let id in data) {
          taskList.push({ id, ...data[id] });
        }
        setTasks(taskList);
      });
    };
    fetchData();
  }, []);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    push(ref(db, "tasks"), newTask);
  };

  const editTask = (id, newText) => {
    update(ref(db, `tasks/${id}`), { text: newText });
  };

  const deleteTask = (id) => {
    remove(ref(db, `tasks/${id}`));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
