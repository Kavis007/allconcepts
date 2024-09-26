import React from 'react'
import PropsChild1 from './PropsChild1'

function PropsChild({n,x}) {
  return (
    <div>
      PropsChild
      
      <PropsChild1 name={n} x={x} />
    </div>
  )
}

export default PropsChild
