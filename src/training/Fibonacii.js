import React,{useState}from 'react'

function Fibonacii() {
   let[a,setA]=useState(0)
   let[b,setB]=useState(1)
   let[c,setC]=useState()
   let[d,setD]=useState()
   let[res,setRes]=useState()
   let arr=[]

   function Fibbb(e){
    setD(Number(e.target.value))
   }

   function Checkfib(){
    let a=0
    let b=1
    let c

      
      for(let i=2;i<=d;i++)
      {
        c=a+b
        arr.push(c)
        a=b
        b=c
         
         
      }
      setRes(arr)
   }

  return (
    <div>
        <input type="text" onChange={Fibbb}/>
        <button onClick={Checkfib}>Click</button>
        <h2>0</h2>
        <br></br>
        <h2>1</h2>
        <br></br>
        <h2>{res}</h2>
    </div>
  )
}

export default Fibonacii
