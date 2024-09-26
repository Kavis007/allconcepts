import React from 'react'

function KeyBoardEvents() {

    function handleKeyDown(e){
        console.log(e.key)
    }
  return (
    <div>
        <input type='text' onKeyDown={handleKeyDown} />
      
    </div>
  )
}

export default KeyBoardEvents
