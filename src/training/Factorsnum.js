import React,{useState}from 'react'

function Factorsnum() {
  let[inp,setInp]=useState()
 let[res,setRes]=useState()
 function Inputisg(e){
    setInp(e.target.value)
 }
   let ar=[]
 function Factnum(){
    for(let i=2;i<=inp;i++)
    {
        if(inp%i===0)
        {
            ar.push(<div>{i}</div>)
        }
    }
    setRes(ar)
 }




  return (
    <div>
      <input type="text" onChange={Inputisg}/>
      <button onClick={Factnum}>click</button>
      <h2>{res}</h2>
    </div>
  )
}

export default Factorsnum
