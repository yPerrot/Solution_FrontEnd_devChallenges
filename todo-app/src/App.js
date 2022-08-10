import { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import './App.css';

let NB_TASK = 0;

const App = () => {

  const [tasks, setTasks] = useState({});
  const [filter, setFilter] = useState('all'); // all | active | completed

  const filterTask = ([taskId, task]) => {
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  };

  const addTask = (taskLabel) => {
    setTasks({
      ...tasks,
      [NB_TASK++]: {
        label: taskLabel.trim(), 
        isCompleted: false,
      } 
    });
  };

  const deleteTask = (taskId) => {
    const newTasks = {...tasks};
    delete newTasks[taskId];
    setTasks(newTasks);
  };

  const deleteAllCompletedTasks = () => {
    const newTasks = Object.entries(tasks).filter(([taskId, task]) => !task.isCompleted);
    setTasks(Object.fromEntries(newTasks));
  };

  const setCompletedTaskState = (taskId, isCompleted) => {
    setTasks({
      ...tasks,
      [taskId]: {
        ...tasks[taskId],
        isCompleted: isCompleted,
      },
    });
  };

  return (
    <div className="app">
      <h1>#todo</h1>

      <header>
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
      </header>
      
      {(filter === 'all' || filter === 'active') &&
        <Input addTask={addTask} />
      }

      <main>
        {Object.entries(tasks).filter(filterTask).map(([taskId, task]) => (
          <Task 
            key={taskId} 

            taskId={taskId} 
            task={task} 
            setCompletedTaskState={setCompletedTaskState} 
            deleteTask={filter === 'completed' ? deleteTask : undefined}
          />
        ))}
      </main>

      {filter === 'completed' &&
        <button className='delete-all' onClick={deleteAllCompletedTasks}>
          {/* Trash Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          
          <span>delete all</span>
        </button>
      }

    </div>
  );
};

export default App;
