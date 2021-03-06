import React from 'react';

class Task extends React.Component {
  StyleTaskCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'gray' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none'
    };
  };
  
  render() {
    const { task } = this.props;
    return( 
      <div style={ this.StyleTaskCompleted() }> { task.title } - 
        { task.description } - 
        { task.done } - 
        { task.id }
        <input type='checkbox' onChange = { this.props.checkDone }/> 
        <button style={ btnDelete } onClick = { this.props.deleteTask }>x</button> 
      </div> 
    );
  };
};

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#ffffff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
};

export default Task;