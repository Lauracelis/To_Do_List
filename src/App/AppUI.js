import React from "react";
import { TodoCounter } from "../components/Counter/TodoCounter";
import { TodoContext } from "../components/TodoContext";
import { TodoSearch } from "../components/Search/TodoSearch";
import { TodoList } from "../components/List/TodoList";
import { TodoItem } from "../components/Item/TodoItem";
import { CreateTodoButton } from "../components/TodoButton/CreateTodoButton";
import {Modal} from "../components/Modal/index";
import { Form } from "../components/TodoForm/Form";
import spinner from '../images/spinner.gif'
import './App.css'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p className="create">Hubo un error...</p>}
        {loading && <p className="create">...</p>}
        {(!loading && !searchedTodos.length) && <p className="create">¡Crea tu primer tarea!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };