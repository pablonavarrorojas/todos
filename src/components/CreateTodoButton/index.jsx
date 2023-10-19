import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {

  return (
    // <button className="CreateTodoButton"
    //   onClick={(event) => {
    //     console.log('le diste click ')
    //     console.log(event)
    //     console.log(event.target)
    //   }}>+ NEW TASK +</button>
    
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