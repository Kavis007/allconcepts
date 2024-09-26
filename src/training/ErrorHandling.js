import React, { useState } from 'react'

function ErrorHandling() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let[errorm,setErrorm]=useState()
    function trry(){
        let bb = Number(b)
    try{
        if(bb===0 || isNaN(bb)){
            throw new Error("u cant divide by 0, pls enter valid number")
        }
        else{
        setC(a/bb)  
        } 

    }catch(error){
        setErrorm(error.message)
    }
}
    // finally{
    //     console.log("finished")
    // }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}/>
      <button onClick={trry}>click</button>
      <h4>{c}</h4>
      <h4>{errorm}</h4>
    </div>
  )
}

export default ErrorHandling
