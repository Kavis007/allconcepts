import React from 'react'

function SpreadOp() {
    let arr = [2,5,6,7]
    console.log(arr)
    console.log(...arr) // spread operator => it converts array values in to individual value

    function sum(...args){  // rest operator => it collects individual values as an array
        console.log(args)

    }

    sum(5,6,7,8,9)
  return (
    <div>
      
    </div>
  )
}

export default SpreadOp
