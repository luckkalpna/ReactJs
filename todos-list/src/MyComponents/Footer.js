import React from 'react'

export default function Footer() {
  let footerStyle = { 
    position: "absolute", 
    // bottom: "0", 
    width: "100%"
  }
  return (
      <div className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">
          Copyright &copy; MyTodosList.com
        </p>
      </div>
  )
}
