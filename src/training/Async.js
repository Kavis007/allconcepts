import React from 'react'

function Async() {
    setTimeout(() => {
        console.log("hello")
    },3000)
  //  setTimeout(fnName,1000)

//   setInterval(() => {
//     console.log("name")
//   },3000)


// const id = setInterval(fnName,2000)
// setTimeout(() => {
//     clearInterval(id)
// },20000)

// function fnName(){

//     return (() => {
//         clearInterval(id)
//     })
// }





    
    console.log("hi")
    console.log("bye")
  return (
    <div>
      
    </div>
  )
}

export default Async
