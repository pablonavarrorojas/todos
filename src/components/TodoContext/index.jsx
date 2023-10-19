import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  //Encapsulamos toda la logica
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  //console.log('los users buscan todo de ' + searchValue)

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length; //!! convierte a boolean cualquier cosa que venga en la variable
  const totalTodos = todos.length;

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
    newTodos.splice(todoIndex,1); //para eliminar del array, 1 param array, y 2do param la cantidad a borrar
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
            completedTodos,
            totalTodos,
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