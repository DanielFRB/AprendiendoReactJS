import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import tasks from './samples/tasks.json';
import Tasks from './comp/Tasks';
import TaskForm from './comp/TaskForm';
import Posts from './comp/Posts';

class App extends React.Component {
  state = { tasks: tasks };

  addTask = (title, description) => { 
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  deleteTask = (id) => { 
    const tasksUpdated = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: tasksUpdated });
  };

  checkDone = (id) => { 
    const newTask = this.state.tasks.map(task => { 
      if (task.id === id) { task.done = !task.done }; 
      return task; 
    });
    this.setState({ tasks: newTask });
  };

  render() {
    return(
      <div>
        <Router>
          <Routes>
            <Route path = '/' element = {
              <div>
                <TaskForm addTask = { this.addTask } />
                <Tasks tasks = { this.state.tasks } deleteTask = { this.deleteTask } checkDone = { this.checkDone } />
              </div>
            } />
            <Route path = '/posts' element = { <Posts /> } />
          </Routes>
        </Router>
      </div>
    );
  };
};

export default App;
