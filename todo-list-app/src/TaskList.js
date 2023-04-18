import Task from "./Task";
import "./TaskList.css";
const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (task) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = (updatedTask) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === updatedTask.id) {
          return { ...item, title: updatedTask.title };
        }
        return item;
      })
    );
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleDelete={() => handleDelete(task.id)}
            handleComplete={() => handleComplete(task)}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
