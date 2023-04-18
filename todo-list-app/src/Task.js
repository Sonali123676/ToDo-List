import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import "./Task.css";

const Task = ({ task, handleDelete, handleComplete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  console.log(task);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveClick = () => {
    handleEdit({ ...task, title });
    setIsEditing(false);
  };

  return (
    <li className={`task-container ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={handleTitleChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <span className="task-title">{task.title}</span>
          <div className="task-icons">
            <button onClick={() => setIsEditing(true)}>
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(task)}>
              <MdDelete />
            </button>
            <button>
              <MdOutlineDownloadDone onClick={() => handleComplete(task)} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
export default Task;
