import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { completed, total } = React.useContext(TodoContext);
  
  return (
    <div>
      <h1>YOUR TASKS</h1>
      <h2>You have completed <span>{completed}</span> of <span>{total}</span> ToDo</h2>
      <hr className='hr' />
    </div>
  )
}

export { TodoCounter }; 