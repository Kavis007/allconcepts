import React, { useState } from 'react'

function Charcountarray() {
    let[a,setA]=useState()
    let[res,setRes]=useState()
    let ob1={}
    function Charcount(){
     
     
     for(let i=0;i<a.length;i++)
     {
        let s1=a.charAt(i)
       if(!ob1[s1])
       {
           ob1[s1]=1
       }
       else
       {
           ob1[s1]+=1
       }
    }
    console.log(ob1)
    setRes(ob1)
    }
    
    
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}></input>
      <button onClick={Charcount}>click</button>
      {res && Object.keys(res).map((i,index) => (
        <div key={index}>{i} - {res[i]}</div>
      ))}
    </div>
  )
}

export default Charcountarray
