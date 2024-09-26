import React, { useState } from 'react'

function Newmouse1() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let k

    function Doclick(){
      setA(true)
    
    }

    function mouseOut(){
        setA(false)
        
    }
    function Doclick1(){
        setB(true)
    }
    function mouseOut1(){
        setB(false)
    }
  return (
    <div>
    <div onMouseOver={Doclick} onMouseOut={mouseOut}>
        {a &&
        <p>The click is used to submit the form</p>}

      <h2 >The super place in cbe is broadway cinmeas</h2>
      </div>
        
      <br></br>
     
     <button onMouseOver={Doclick1} onMouseOut={mouseOut1}>Click</button>
     {b && <p>the click button is one of the submit method </p>}
      {a}
      </div>

  )
}

export default Newmouse1
