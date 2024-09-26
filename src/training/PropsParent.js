import React from 'react'
import PropsChild from './PropsChild'

function PropsParent() {

    let name = "kavi"
  return (
    <div>
        <h1>PropsParent</h1>
      <PropsChild n={name} x= "7" />
    </div>
  )
}

export default PropsParent
