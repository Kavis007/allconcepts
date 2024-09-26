import React from 'react'

function ArrayObj() {
    let arr=[23,45,67,89]
    console.log(arr.length)
    console.log(arr.push(90))
    console.log(arr)
    console.log(arr.pop())
    console.log(arr.shift()) // delete at 0th index
    console.log(arr.unshift(54)) // add at 0th index
    console.log(arr)
    console.log(arr.splice(1,0,120,21,32))  // to add => starting index, delete count as 0 , adding elements
    console.log(arr)
    console.log(arr.splice(2,2)) // to delete => starting index, delete count
    console.log(arr)
    console.log(arr.reverse())
    console.log(arr.sort((a,b) => a-b))
    console.log(arr.join(" "))
    console.log(arr.every(i => i>50))
    console.log(arr.some(i => i>50))
    console.log()
    arr.forEach(i => {
        console.log(i*2)
    })

    console.log(arr.filter(i => i>50))
    console.log(arr.reduce((a,b) => a+b, 0)) // like sum process
    console.log(arr.reduceRight((a,b) => a+b, 0))
    console.log(arr.map(i => i*2 ))




  return (
    <div>
      {arr.map((i,index) => (
        <li key={index}>{i}</li>
      )) }
    </div>
  )
}

export default ArrayObj
