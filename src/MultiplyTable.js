import React,{useState}from 'react'

function MultiplyTable() {
    let [inp,setInp]=useState()
    let [op,setOp]=useState()
    let[res,setRes]=useState()
    let i
    function Giveinp(a){
        setInp(Number(a.target.value))
    }
    function Mulcheck(){
        let arr=[]
        for( i=1;i<=10;i++)
        {
            arr.push(<div>{i}X{inp} = {(inp*i)}</div>)

        }
        

    }
  return (
    <div>
        <input type="text" onChange={Giveinp}/>
        <button onClick={Mulcheck}>Click</button>
        <h3>{res}</h3>
       
        
    </div>
  )
}

export default MultiplyTable
