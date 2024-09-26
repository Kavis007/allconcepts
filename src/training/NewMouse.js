import React, { useState } from 'react'

function NewMouse() {
    let[a,setA]=useState("white")
    let[b,setB]=useState()

    function ColorChange(){
        setA("purple")
    }

    function handleMouseOut(){
        setA("white")
    }
  return (
    <div style={{backgroundColor:a, width:"500px", height:"500px"}} 
    onMouseOver={ColorChange} onMouseOut={handleMouseOut}>  
      My first mouseEvent project

      <button>click</button>
    </div>
  )
}


export default NewMouse
