import React from "react";
import './TodoItem.css';
import done from '../../images/done.png'
import close from '../../images/close.png'

function TodoItem(props) {
  return (
    <div className="TodoItem-container">
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      > 
        <img src={done}/> 
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <img className="delete" src={close}/> 
      </span>
    </li>
    </div>
  );
}

export { TodoItem };