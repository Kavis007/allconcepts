import React, { useState } from 'react'

function Factrecurs() {
    let[a,setA]=useState()
    let[store,setStore]=useState()

    function Factnumm(a){
        let f=1
        if(a==0){
            return 1
        }
        else{
            return a*Factnumm(a-1)
        }

    }

    function fact(){
        let f=Factnumm(a)
        setStore(f)
    }
       

  return (
    <div>
      <input type="text" onChange={(e) => {setA(e.target.value)}}/>
      <button onClick={fact}>Click</button>
      <h1>{store}</h1>
    </div>
  )
}

export default Factrecurs
