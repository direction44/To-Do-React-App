import React, { useState } from 'react';

function TaskItem({ task, deleteTask, editTask, toggleTaskStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(task.text, newText);
    setIsEditing(false);
  };

  return (
    <tr className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      <td onClick={() => toggleTaskStatus(task.text)} style={{ cursor: "pointer" }}>
        <input type="checkbox" readOnly checked={task.isCompleted} />
        <span>{task.text}</span>
      </td>
      <td>
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} autoFocus />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.text)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default TaskItem;
