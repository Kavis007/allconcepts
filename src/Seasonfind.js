import React,{useState}from 'react'

function Seasonfind() {
   let[op,setOp]=useState()
   let[va,setVa]=useState()

   function Passval(e){
    setVa(e.target.value)
   }
   function Output(){
    switch(va)
    {
        case "jan":
            setOp("It is summer")
            break
        case"feb":
            setOp("It is summer")    
            break
         case"mar":
            setOp("It is summer") 
            break 
        case"apr":
            setOp("Heavy summer")
            break
        case"may":
            setOp("heavy summer")
            break
        case"sept":
            setOp("rainy") 
            break
        case"oct":
            setOp("Winter")
                break
        case"dec":
            setOp("Winter")
                break
        default:
            setOp("Common weather") 
            break
    }
   }

  return (
    <div>
      <input type="text" onChange={Passval}/>
      <br></br>
      <button onClick={Output}>Click</button>
      <h1>{op}</h1>
    </div>
  )
}

export default Seasonfind
