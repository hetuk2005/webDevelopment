import React, { useState } from 'react'
import './App.css'

import {Child} from "./Components/Child"

export function Parent() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operators, setOperators] = useState("");
  
  return (
    <>
      <h1>Calculator</h1>
      <input type="text" placeholder='Number 1' onChange={(e)=>setNumber1(e.target.value)}/><br /><br />
      <input type="text" placeholder='Operator' onChange={(e)=>setOperators(e.target.value)}/><br /><br />
      <input type="text" placeholder='Number 2' onChange={(e)=>setNumber2(e.target.value)}/><br /><br />
      <Child props={{number1,operators,number2}} />
    </>
  )
}
