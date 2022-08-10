import { useState } from 'react';
import './Input.css';

const Input = ({addTask}) => {

  const [label, setLabel] = useState('');

  const handleChange = (e) => {
    setLabel(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label.trim()) return;

    addTask(label);
    setLabel('');
  };

  return (
    <div className='task-form'>
      <input 
        className='task-form__input'
        placeholder='add details'
        value={label}
        onChange={handleChange}
        size='1' // Set min width
      ></input>
      <button className='task-form__btn' onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Input;