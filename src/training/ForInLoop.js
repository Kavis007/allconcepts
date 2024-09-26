import React from 'react'

function ForInLoop() {
    let a=[2,4,6,7]
    for(let i in a){
        console.log(a[i])
    }

    for(let i of a){
        console.log(i)
    }
  return (
    <div>
      
    </div>
  )
}

export default ForInLoop
