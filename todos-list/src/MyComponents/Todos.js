import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
  return (
    <div className="container my-4">
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo) => {
          return (
            <>
            <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
            <hr />
            </>
          )
})}
    </div>
  );
}
