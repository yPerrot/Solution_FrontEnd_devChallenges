import './Task.css';

const Task = ({taskId, task, setCompletedTaskState, deleteTask}) => {

  const handleChange = () => {
    setCompletedTaskState(taskId, !task.isCompleted);
  };

  const handleDelete = () => {
    deleteTask(taskId);
  };

  return (
    <div className='task' key={taskId}>
      <input className='task__checkbox' type={'checkbox'} onChange={handleChange} checked={task.isCompleted}></input>
      <span className={`task__label ${task.isCompleted ? 'completed' : ''}`} onClick={handleChange}>{task.label}</span>
      {deleteTask && 
        <svg 
          className='task__delete' onClick={handleDelete}
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BDBDBD"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      }
    </div>
  );
};

export default Task;