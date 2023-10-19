import React from 'react'
import './App.css'

import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'

import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { TodoContext, TodoProvider } from '../components/TodoContext';
import { TodoForm } from '../components/TodoForm';

import { Modal } from '../components/Modal'; 

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    
      <>
        <TodoCounter />
        <TodoSearch />

          <TodoList>
            <TodoContext.Consumer>
          {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
              <>
                {loading &&
                  <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                  </>
                }
                
                {error && <TodosError /> }
                
                { (!loading && searchedTodos.length === 0) && <TodosEmpty />}

                {searchedTodos.map(todo => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                  />
                  ))
                }
              </>
              )}
            </TodoContext.Consumer>
          </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} />
        
        {openModal && (
          <Modal>
            <div className="ModalBackground">
              <TodoForm />
              <button className='ModalButtonClose' onClick={ () => { setOpenModal(false) } }>X</button>
            </div>
          </Modal>
        )}

      </>
      

  )
}

export default App
