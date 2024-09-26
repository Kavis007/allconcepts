import React, { useState } from 'react'

function Intialextractarray() {
    let[name,setName]=useState()
    let[store,setStore]=useState()
    function Samefn(){
        let s2=''
        let split1=name.split(",")
        // for(let k=0;k<split1.length;k++)
        // {
        //     if(split1[k].includes(" "))
        //     {
        //         // let split2=split1[k].toString()
        //         let split2=split1[k].split(" ")
        //         console.log(split2)
        //         for(let m=0;m<split2.length;m++)
        //         {
        //             s2+=split2[m].charAt(0)
        //             console.log(s2)
        //         }
        //      s2+=","
        //     }       
        //     else
        //     {
        //         s2+=split1[k].charAt(0)
        //         if(k!=split1.length-1)
        //         {
        //             s2+=","
        //         }
        //         if(k===split1.length-1)
        //         {
        //             s2+="."
        //         }
               
        //     }
            
        // }

let arr=[]

        split1.map((i)=> i.trim() )
       split1.map(i => {
      arr.push(getInitials(i)+" ")

       })

       function getInitials(i){
        let l= i.split(" ")
        console.log(l.map(i => i[0].toUpperCase()).join("."))
       return l.map(i => i[0].toUpperCase()).join(".")
       }
       
        
       console.log(arr)
        setStore(arr)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
      <br/>
      <button onClick={Samefn}>Click</button>
      <h3>{store}</h3>

    </div>
  )
}

export default Intialextractarray
