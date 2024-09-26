import React,{useState} from "react";
function GradeCal(){
    let[a,setA]=useState()
    let[b,setB]=useState()

function GetInp(a){
    setA(Number(a.target.value))
}
function Jfp(){
    if(a>=90)
    {
        setB(a + ",It is O grade")
    }
    else if(a>=80 && a<90)
    {
        setB(a +",It is A grade")
    }
    else if(a>=70 && a<80)
    {
        setB(a +",It is B grade")
    }
    else{
        setB(a +",It is last grade")
    }
}



return(
    <div>
        <input type="text" onChange={GetInp}/>
        <button onClick={Jfp}>click</button>
        <h1>{b}</h1>

    </div>
)
}
export default GradeCal
