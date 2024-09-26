import React,{useState} from "react";
function Lengconv(){
    let[a,setA]=useState()
    let[output,setOutput]=useState()


    function Giveip(a){
        setA(Number(a.target.value))
    }

    function ConvertIntoLength(){
        setOutput(a*0.393701+" inch")
    }


    return(
        <div>
            <input type="text" onChange={Giveip}/>
            <button onClick={ConvertIntoLength}>Click</button>
            <h1>{output}</h1>
        </div>
    )


}
export default Lengconv