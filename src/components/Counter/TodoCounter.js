import React from "react";
import { TodoContext } from "../TodoContext";
import coffee from '../../images/coffee.png'
import './TodoCounter.css'

 
function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    
    return (
      <div className="todoCounter-container">
      <h1 className="title-TodoCounter">Es momento de ponerte al día</h1>
        <h3 className="subtitle-TodoCounter">Ve por un café y empecemos...<div className="coffee" ><img className="cafe" src={coffee} /></div></h3>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
      </div>
      
    );
  }
  
  export { TodoCounter };