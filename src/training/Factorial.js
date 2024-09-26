import React,{useState}from 'react'

function Factorial() {
    let[c,setC]=useState()
    let[op,setOp]=useState()
    let m=1
    function Givevalue(e){
        setC(Number(e.target.value))
    }

    function Outpp(){
        for(let i=c;i>=1;i--)
        {
            m=m*i
            setOp(m)
        }
        

    }
  return (
    <div>
      <input type="text" onChange={Givevalue}/>
      <button onClick={Outpp}>click</button>
      <h2>{op}</h2>
    </div>
  )
}

export default Factorial
