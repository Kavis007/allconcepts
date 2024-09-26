import React, { useState } from 'react'

function Bmifind() {
   let[height,setHeight]=useState()
   let[weight,setWeight]=useState()
   let[op,setOp]=useState()
   let[op1,setOp1]=useState()
   let temp=0
   let temp1=1,k=0
   let m=0
     function ConvertTom(height){
      temp=Number(height/100)
      temp=temp*temp
      return temp
     }
     function Findbmi(){
        temp1=ConvertTom(height)
        m=(weight/temp1)
        k=Math.floor(m)
        console.log(k)
        Givevalue(k)
     }
    function Givevalue(k){
        if(k<18)
        {
           setOp1("Underweight")
           
        }
        else if(k>=18 && k<=24)
            {
            setOp1("normal")
            
        }
        else if(k>=25 && k<=29)
        {
            setOp1("Overweight")
            
        }
        else{
            setOp1("Obesity")
        }
    }


  return (
    <div>
      <input type="text" onChange={(e)=>{setHeight(Number(e.target.value))}}/>
      <input type="text" onChange={(e)=>{setWeight(Number(e.target.value))}}/>
      <button onClick={Findbmi}>Click</button>
      <h1>{op1}</h1>
    </div>
  )
}

export default Bmifind
