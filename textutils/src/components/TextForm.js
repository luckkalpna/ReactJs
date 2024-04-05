import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
          <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    <div className='conatiner my-3'>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
