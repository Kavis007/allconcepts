import React from 'react'

function StringObj() {

    let str = "react is a library  "
    console.log(str.length)
    console.log(str.at(-2))
    console.log(str.charAt(0))
    console.log(str.charCodeAt(3));
    console.log(str.slice(0,4))
    console.log(str.search("a"))
    console.log(str.split(" "))
    console.log(str.repeat(3))
    console.log(str.replace("react", "angular"))
    console.log(str.padEnd(25,"a"))
    console.log(str.padStart(23,"*"))
    console.log(str.concat("hvdhs"))
    console.log(str.startsWith("react"))
    console.log(str.endsWith("r"))
    console.log(str.substring(5,0))
    console.log(str.includes("z"))
    console.log(str.indexOf("i"))
    console.log(str.lastIndexOf("i"))
    console.log(str.toUpperCase())
    console.log(str.trim())
    console.log(str.valueOf())
    console.log(str.padStart(23,"rreact"))
    console.log(str.valueOf())

  return (
    <div>
      
    </div>
  )
}

export default StringObj
