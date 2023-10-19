import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completed = todos.filter(todo => !!todo.completed).length; //!! convierte a boolean cualquier cosa que venga en la variable
  const total = todos.length;

  const searchedTodos = todos.filter(
    (todo) => { 
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    });
    saveTodos(newTodos);
  }

    return (
        <TodoContext.Provider value={{
            completed,
            total,
            loading,
            error,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            
            { children }

        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }