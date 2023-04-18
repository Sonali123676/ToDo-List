import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./AddTaskForm.css";

const AddTaskForm = ({ tasks, setTasks }) => {
  console.log(tasks);
  const [input, setInput] = useState();
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { id: uuidV4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form style={{ display: "flex" }} onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Task..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <button className="button-add" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
