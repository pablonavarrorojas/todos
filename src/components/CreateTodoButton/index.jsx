import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {

  return (

    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }>+ NEW TASK +</button>
    
  );
}

export { CreateTodoButton };