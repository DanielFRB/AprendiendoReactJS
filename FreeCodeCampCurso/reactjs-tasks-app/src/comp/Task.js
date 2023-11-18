import React from 'react';
import '../css/Task.css';
import { AiTwotoneDelete } from "react-icons/ai";

function Task({ id, texto, taskDone, doTask, dropTask }) {
  return (
    <div className = {taskDone ? 'tasks-container done' : 'tasks-container'}>
      <div className = 'task-text' onClick = {() => doTask(id)}>
        { texto }
      </div>
      <div className = 'task-icons-container' onClick = {() => dropTask(id)}>
        <AiTwotoneDelete className = 'task-icon' />
      </div>
    </div>
  );
};

export default Task;
