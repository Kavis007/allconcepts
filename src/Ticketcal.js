import React,{useState} from "react";
function TicketCal(){
    let[a,setA]=useState()
    let[op,setOp]=useState()

    function GetInp(a){
        setA(Number(a.target.value))
    }
    function Ticketchecker(){
        if(a>=20 && a<=40)
        {
            setOp(a+",The ticket rate is 150")
        }
         else if(a>40 && a<=60)
         {
            setOp(a+",The ticket rate is 100")
         }
         else if(a<=10)
         {
            setOp(" The ticket is free")
         }
         else{
            setOp("It is invalid age")
         }
    }








    return(
        <div>
            <input type="text" onChange={GetInp}/>
            <button onClick={Ticketchecker}>click</button>
            <h1>{op}</h1>
        </div>
    )
}
 
 export default TicketCal