import React, { useState, useCallback } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';
function MainTask() {
  const [taskList, setTaskList] = useState([]);

  const addTask = useCallback((task) => {
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    setTaskList(prevTasks => [...prevTasks, { text: task.trim(), isCompleted: false }]);
  }, []);

  const deleteTask = useCallback((taskName) => {
    setTaskList(prevTasks => prevTasks.filter(task => task.text !== taskName));
  }, []);

  const editTask = useCallback((oldTask, newTask) => {
    setTaskList(prevTasks =>
      prevTasks.map(task => (task.text === oldTask ? { ...task, text: newTask } : task))
    );
  }, []);

  const toggleTaskStatus = useCallback((taskName) => {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.text === taskName ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <CreateTask addTask={addTask} />
      <TaskList tasks={taskList} deleteTask={deleteTask} editTask={editTask} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}

export default MainTask;
