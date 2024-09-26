import React, { useState } from 'react'
import Cookies from 'js-cookie'
function Cookiestask() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let [isCookie, setIscookie]= useState(false)
     function Accept(){
        Cookies.set("name","true",{expires:3})
        setA("the cookies have gotted")
        alert("accept the cookies or not")
       

     }
    function buttonshow(){
     
        setB(<button  onClick={Accept}>click</button>)
    }
    const id=setTimeout(buttonshow,3000)

    function acceptCookie(){
        if(Cookies.get("name") == undefined){
            return false
        }
        else{
            return true
        }

    }
     
     
   
  return (
    <div>
       {/* <button onClick={buttonshow}>clickkkk</button> */}
        

        { !acceptCookie() && b}
        {acceptCookie() && <div>The cookies are accepted</div>} 
       
       
    </div>
  )
}

export default Cookiestask
