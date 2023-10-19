import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {  //las props son un objeto

  const { completed, total } = React.useContext(TodoContext);
  
  return (
    <div>
      <h1>YOUR TASKS</h1>
      <h2>You have completed <span>{completed}</span> of <span>{total}</span> ToDo</h2>
      <hr className='hr' />
    </div>
  )
}

//export default TodoCounter

//EXPORTAMOS de esa manera para evitar que al 
//importar se cambien el nombre del compomente por error
//esto se llama: export nombrado
export { TodoCounter }; 