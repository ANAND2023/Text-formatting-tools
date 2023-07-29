import React ,{useState}from 'react'

export const Exchange = () => {
    const [text1,setText1]=useState("") 
    const [text2,setText2]=useState("") 

    const handleChange1=(e)=>{
        setText1(e.target.value)
    }
    const handleChange2=(e)=>{
        setText2(e.target.value)

    }

  const handleArrow=()=>{
    
      setText1(text2);
      setText2(text1)

  }

  return (
  <>
  <div className="container">
        <input type="text" onChange={handleChange1} value={text1}/>
        <i className="fa-solid fa-arrow-right-arrow-left" onClick={handleArrow}></i>
        <input type="text" onChange={handleChange2} value={text2}/>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  </>
  )
}
