import React, { useState } from 'react'

function Passswordvalidation() {
    let[a,setA]=useState()
    let[bb,setBb]=useState()
    function Passval(){
        let capit=/^(?=[A-Za-z0-9\W]*).{8,}$/
        if(capit.test(a))
        {
              setBb("It is valid password")
        }
        else
        {
            setBb("It is not a valid password")
        }
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Passval}>Click</button>
      <h3>{bb}</h3>
    </div>
  )
}

export default Passswordvalidation
