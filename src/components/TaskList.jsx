import React from 'react';
import TaskItem from "./TaskItems"
function TaskList({ tasks, deleteTask, editTask, toggleTaskStatus }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTaskStatus={toggleTaskStatus}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
