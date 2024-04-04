import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here")
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </div>
  )
}
