import './TodoItem.css'
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

function TodoItem({ text,completed, onComplete, onDelete }) { 
    return (
      <li className="TodoItem">
        
        <span
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
          onClick={onComplete}>
          <FaCheckCircle />
          </span>
        
        <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>{text}</p>
        
        <span
          className={`Icon Icon-delete`}
          onClick={onDelete}>
          <FaTimes />
          </span>
      </li>
    )
}

export { TodoItem };