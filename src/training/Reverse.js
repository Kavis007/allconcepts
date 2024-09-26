import React, { useState } from 'react'

function Reverse() {
     let[a,setA]=useState()
     let[op,setOp]=useState()
      
function GiveValluue(e){
 setA(e.target.value)
  }
  function Toreverse(){
   let temp=0
   while(a!=0)
   {
      let stor=a%10
      temp=temp*10+stor
      a=Math.floor(a/10)
   }
  setOp(temp)  }

  return (
    <div>
         <input type="text" onChange={GiveValluue}/>
         <button onClick={Toreverse}>click</button>
         <h2>{op}</h2>
    </div>
  )
}

export default Reverse
