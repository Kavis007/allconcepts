import React, { useState } from 'react'

function ArrowFn() {
    let[input, setInput] = useState()
  return (
    <div>
      <input type='text' onChange={(e) => {setInput(e.target.value)}} />
      {input}
    </div>
  )
}

export default ArrowFn
