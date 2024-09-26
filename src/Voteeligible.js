import React from "react";
function Voteeligible(){
   let a=25
   let b=36
   let c
   let flag=0
   if(a>18 && b>18)
   {
       
       flag=1
   }
   if(flag===1)
   {
    c="are eligible"
   }
   else
   {
      c=" are not eligible"
   }
    return(
        <div>
      {a} and {b} {c}
      </div>
    )
}
export default Voteeligible