import React, { useState } from 'react';
import '../css/TaskForm.css';
import { v4 as uuid } from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');
  const handleChange = e => { setInput(e.target.value) };
  const handleShipping = e => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      texto: input,
      taskDone: false
    };
    props.onSubmit(newTask);
  };
  return (
    <form className = 'task-form' onSubmit = {handleShipping}>
      <input className = 'task-input' type = 'text' placeholder = 'Escribe una tarea' name = 'texto' onChange = {handleChange} />
      <button className = 'task-btn'>Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
