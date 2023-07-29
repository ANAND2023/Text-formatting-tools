import React ,{useState} from 'react';
export const Textarea = (props) => {
    const [text,setText]=useState("")
    const handleUp=(event)=>{
       setText( event.target.value)
    }
  
    const changeUpCase=()=>{
      let newText=text.toUpperCase();
      setText(newText)
    }
    const changeLoCase=()=>{
        setText(text.toLowerCase())
    }
    const changeCamelCase=()=>{
    const words = text.split(/[\s_]+/);
    const camelCasedWords = words.map((word, index) =>
      index === 0 ?  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    const camelCasedText = camelCasedWords.join(' ');
    setText(camelCasedText);
    }
    
    const changeClear=()=>{
        let text_area=""
        setText(text_area)
    }
    const changeCopyText=()=>{
        navigator.clipboard.writeText(text);
    }
    const spaceRemove=()=>{
        const trimmedString = text.replace(/\s+/g, ' ');
        setText(trimmedString)

    }
  return (
  <>
<div className="container">
   <h1>hello world</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleUp} style={{backgroundColor:props.mode==="light"?"white":"#14262c", color:props.mode==="light"?"black":"white" }} id="exampleFormControlTextarea1" rows="6"></textarea>
  <button className="btn1 mx-1" onClick={changeUpCase}>Change to UpperSase</button>
  <button className="btn1 mx-1" onClick={changeLoCase}>Change to LowerCase</button>
  <button className="btn1 mx-1" onClick={changeCamelCase}>Change to CamelCase</button>
  <button className="btn1 mx-1" onClick={changeClear}>Clear</button>
  <button className="btn1 mx-1" onClick={changeCopyText}>CopyText</button>
  <button className="btn1 mx-1" onClick={spaceRemove}>Remove Space</button>
</div>
</div>
<div className="container">
    <h3>preview</h3>
    <p>{text===""?"Enter Your Text":text}</p>
</div>
  </>
  )
}
