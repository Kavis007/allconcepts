import React, { useState } from 'react'

function Comparetwodates() {
    let[date1,setDate1]=useState()
    let[date2,setDate2]=useState()
    let[op,setOp]=useState()
    function Compare(){
        let dateobjj=new Date(date1)
        let dateobjj2=new Date(date2)
        let dateobjp=dateobjj.getDate()
        let dateobjq=dateobjj2.getDate()
        let dum1=dateobjj.getTime()
        console.log(dum1)
        let dum2=dateobjj2.getTime()
        if(dum1>dum2){
         setOp(`The date ${dateobjj.toDateString()} is after the date ${dateobjj2.toDateString()}`)
        }
        else
        {
            setOp(`The date ${dateobjj} is before the date ${dateobjj2}`)
        }
    }
  return (
    <div>
      <input type='date' onChange={(e)=>{setDate1(e.target.value)}}></input>
      <input type='date' onChange={(e)=>{setDate2(e.target.value)}}></input>
      <br/>
      <button onClick={Compare}>Click</button>
      <h3>{op}</h3>
    </div>
  )
}

export default Comparetwodates
