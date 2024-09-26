import React, { useState } from 'react'

function Inputfiltering() {
    let[a,setA]=useState()
        
    
  return (
    <div>
      <input type='text' name="inp1" value={a} onChange={(e)=>{
                 let va=e.target.value
                 let che=/^\d*$/
                 if(che.test(va))
                    {
                        setA(va)
                    }
      }}></input>
    </div>
  )
}

export default Inputfiltering
