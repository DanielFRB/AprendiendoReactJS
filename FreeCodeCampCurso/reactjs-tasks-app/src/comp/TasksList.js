import React, { useState } from 'react';
import '../css/TasksList.css';
import TaskForm from './TaskForm.js';
import Task from './Task.js';

function TasksList() {
  const [tasks, setTasks] =  useState([]);

  const addTask = task => { 
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const dropTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  };

  const doTask = id => {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.taskDone = !task.taskDone;
      };
      return task;
    });
    setTasks(tasksUpdated);
  };

  return (
    <>
      <TaskForm onSubmit = { addTask } />
      <div className = 'tasks-list-container'>
        {
          tasks.map((task) =>
            <Task 
              key = {task.id} 
              id = {task.id} 
              texto = {task.texto} 
              taskDone = {task.taskDone} 
              doTask = {doTask} 
              dropTask = {dropTask} 
            />
          )
        }
      </div>
    </>
  );
};

export default TasksList;
