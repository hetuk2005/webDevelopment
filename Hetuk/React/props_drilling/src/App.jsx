import React from 'react'
import './App.css'

import {Child} from "./Components/Child"

export function Parent() {
  let [count, SetCount] = React.useState(100);
  
  const handleInc = () => {
    SetCount((add) => add + 1)
}

    const handleDec = () => {
    SetCount((prev) => prev - 1)
}
  
  return (
    <>
      <h1>Parent</h1>
      <Child counts={{ count, handleInc,handleDec}} />
    </>
  )
}
