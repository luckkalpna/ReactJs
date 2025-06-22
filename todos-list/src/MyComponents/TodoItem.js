import React from 'react'

export default function TodoItem({todo, onDelete}) {
   if (!todo) return null; // Or show a fallback UI
  return (
    <div className='my-3'>
      <h4>{todo?.title}</h4>
      <p>{todo?.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
  )
}
