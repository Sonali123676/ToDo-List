import React, { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="heading">ToDo List App</h1>
        <AddTaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
