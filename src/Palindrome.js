import React, { useState } from 'react'

function Palindrome() {
   let [a,setA]=useState()
   let[b,setB]=useState()
    let ar=[]
   function Value1(e){
     setA(e.target.value)
   }
   function Palin(){
    if( isNaN(a))
    {
        console.log("inside if")
        console.log(a,"inside if")
        let rever=''
        for(let i=a.length-1;i>=0;i--)
        {
            rever+=a[i]
        }
        setB(rever)
    }
    else{
        console.log("not a string")
    
    {
        let temp=0
        while(a!=0)
      {
      let stor=a%10
      temp=temp*10+stor
      a=Math.floor(a/10)
      }
      setB(temp)
    }
    }
   }
  return (
    <div>
       <input type="text" onChange={Value1}/>
       <button onClick={Palin}>Click</button>
       <h1>{b}</h1>
    </div>
  )
}

export default Palindrome
