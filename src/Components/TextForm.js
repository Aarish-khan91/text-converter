import React ,{useState}from 'react'

export default function TextForm(props) {
  const [text,setText] = useState('Enter text here2');
  // text = "new text"//wrong way
  // setText("new Text")//corrext way
 
  const handleOnChange = (event)=>{
    console.log('On change')
    setText(event.target.value)
  }

  const handleUpClick =()=>{
    console.log("Uppercase was clicked "+text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handleDownClick =()=>{
    console.log("Lowercase was clicked "+text)
    let newText = text.toLowerCase();
    setText(newText)

  }

  return (
    <div>
    <h1>{props.heading}</h1>

<div class="mb-3">
  {/* <label for="myBox" class="form-label">{props.heading}</label> */}
  <textarea class="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>

</div>
  <button className="btn btn-primary"onClick={handleUpClick} > Convert to Uppercase </button>
  <button className="btn btn-primary"onClick={handleDownClick} > Convert to Lowercase </button>

  </div>
  )
}
