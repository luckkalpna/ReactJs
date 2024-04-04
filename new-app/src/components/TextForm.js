import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="15"></textarea>
      </div>
    </div>
  )
}
