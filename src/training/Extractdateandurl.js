import React, { useState } from 'react'

function Extractdateandurl() {
    let[a,setA]=useState()
    let[store,setStore]=useState()
    function Extractt(){
        let datefor=/\d{2}-\d{2}-\d{4}/
        let url=/https?:\/\/[\S]+/
        let st
        if(datefor.test(a))
        {
            setStore(datefor.exec(a))
        }
        else if(url.test(a))
        {
            setStore(url.exec(a))
        }
        
       
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Extractt}>Click</button>
      <h3>{store}</h3>
    </div>
  )
}

export default Extractdateandurl
