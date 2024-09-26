import React,{useState}from 'react';

function Repch() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let ar=[]
    function Value1(e)
    {
        setA(e.target.value)
    }
    function Value2(e)
    {
        setB(Number(e.target.value))
    }
    function Op(){
        for(let i=0;i<b;i++)
        {
            ar.push(a)
        }
        setC(ar)
    }


  return (
    <div>
      <input type="text" onChange={Value1}/>
      <input type="text" onChange={Value2}/>
      <br></br>
      <button onClick={Op}>click</button>
      <h1>{c}</h1>
    </div>
  )
}

export default Repch
