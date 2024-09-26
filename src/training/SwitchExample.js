import React from 'react'

function SwitchExample() {
    
    let a="one"
    switch(a){
        case "one":
            console.log("one")
            break;
        case 2:
            console.log("two")
            break;
        default:
            console.log("invalid")
            break;
    }
  return (
    <div>
      
    </div>
  )
}

export default SwitchExample
