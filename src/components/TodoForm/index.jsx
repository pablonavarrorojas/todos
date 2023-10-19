import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => { 
    event.preventDefault();
    //console.log(event.target.value)
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => { 
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Add New ToDo</h2>    
      <label>Ingresa un nuevo ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Agrega un nuevo ToDo a tu lista...' />
      
      <button type="button"
        onClick={onCancel} 
        className='TodoForm-btn TodoForm-btn--cancel'>Cancelar</button>
      
      <button type="submit"
        className='TodoForm-btn TodoForm-btn--add'>Agregar</button>
    </form>
  )
}

export { TodoForm }