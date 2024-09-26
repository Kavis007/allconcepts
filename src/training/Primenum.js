import React,{useState}from 'react'

function Primenum() {
       let [a,setA]=useState()
       let [output,setOutput]=useState()

       function GiveValuue(e)
       {
        setA(Number(e.target.value))
       }
       function Checkprime(){
        let flag=0
        if(a<=1)
        {
             flag=1
        }
        else
        {
            for(let i=2;i<=Math.sqrt(a);i++)
            {
                if(a%i===0)
                {
                    flag=1
                    break
                }
            
            }
            if(flag===0)
            {
                setOutput(a+" It is  Prime number")
            }
            else
            {
                setOutput(a+" It  not Prime Number")
            }
            
        }
       }




  return (
    <div>
          <input type="text" onChange={GiveValuue}/>
          <button onClick={Checkprime}>click</button>
          <h2>{output}</h2>
    </div>
  )
}

export default Primenum
