import React from "react";
function Oddeven(){
    let a=50
    let c
    var d
    if(a%2===0)
    {
        c="is a even number"
       var d=a
        
    }
    else{
        c="is not a even number "
        var d=a
    }
    return(
        <div>
            {d} {c}
        </div>
    )

}
export default Oddeven