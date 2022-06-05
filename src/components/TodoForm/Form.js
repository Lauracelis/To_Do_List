import React from "react";
import { TodoContext } from "../TodoContext";
import './Form.css'

function Form() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal, 
    } = React.useContext(TodoContext)

    const onChange = (event) => {
     setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit} >
      <label>¡ Genial ! </label>
      <label>Una nueva tarea</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribela aquí"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
    );
}

export {Form}