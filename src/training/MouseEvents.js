import React from 'react'

function MouseEvents() {

    function handleMouseOver(e){
        console.log("mouse over")
        console.log(e.clientX,e.clientY)
        
        
    }

    function handleMouseOut(){
        console.log("mouse out")
    }
  return (
    <div onMouseDown={handleMouseOver} onMouseUp={handleMouseOut}>

        mouse events
        mouse events
        mouse events
        mouse events
        mouse events
        mouse events
        mouse events
        <button>click</button>
      
    </div>
  )
}

export default MouseEvents
