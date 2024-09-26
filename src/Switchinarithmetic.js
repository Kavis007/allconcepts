import React, { useState } from 'react'

function Switchinarithmetic() {
   let[a,setA]=useState(12)
   let[b,setB]=useState(15)
   let[op,setOp]=useState()
   let[val,setVal]=useState()

   function Inputval(e){
    setA(Number(e.target.value))
   }
   function Inpval1(e){
    setB(Number(e.target.value))
   }
   function setValuu(e)
   {
    setVal(e.target.value)
   }
   function Netres(){
   switch(val)
   {
    case "+":
        setOp(Number(a+b))
        break
     case "-":
        if(b>a)
            {
                setOp(Number(b-a))
                break
            }
            else
            {
                setOp(Number(a-b))
                break
            }  
         case "*":
            setOp(Number(a*b))
            break 
         default:
            setOp(Number(a/b)) 

   }
}

  return (
    <div>
         <input type="text" onChange={Inputval}/>
         <input type="text" onChange={Inpval1}/>
         <input type="text" onChange={setValuu}/>
         <button onClick={Netres}>click</button>
         <h1>{op}</h1>
    </div>
  )
}

export default Switchinarithmetic
