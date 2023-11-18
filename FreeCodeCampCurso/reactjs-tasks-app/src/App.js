import './App.css';
import FreeCodeLogo from './comp/FreeCodeLogo.js';
import TasksList from './comp/TasksList.js';

function App() {
  return (
    <div className='App'>
      <FreeCodeLogo />
      <div className='tasks-list-ppal'>
        <h1>Mis Tareas</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;