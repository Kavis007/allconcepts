import React,{useState} from "react";
function VowelCons(){
     let[input,setInput]=useState()
     let[op,setOp]=useState()

  function ValGiv(e){
       setInput(e.target.value)
  }   
   
   function Check(){
    if(input==="a" || input==="e" || input==="i" || input==="o" || input==="u")
    {
      setOp(input+",It is vowel")
    
    }
    else
    {
      setOp(input+",It is Consonants")
    }
   }





  return(
    <div>
      <input type="text" onChange={ValGiv}/>
      <button onClick={Check}>Click</button>
      <h1>{op}</h1>
    </div>
  )
}
export default VowelCons