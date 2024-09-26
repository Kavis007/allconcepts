import React from 'react'

function PropsChild1(props) {
  return (
    <div>
        <h2>PropsChild1</h2>
      {props.name}
      {props.x}

    </div>
  )
}

export default PropsChild1
