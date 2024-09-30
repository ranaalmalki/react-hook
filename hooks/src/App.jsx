import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [add, setAdd] = useState("")
  const [sub, setSub] = useState("")
  const [mul, setMul] = useState("")
  const [div, setDiv] = useState("")

  const [color , setColor] = useState("")
  const [colorbg , setColorbg] = useState("")
  // setColorbg("black")
  return (
    <div style={{backgroundColor:colorbg,color:color}}>
    <button onClick={ ()=>setColor("green")} >green</button>
    <button onClick={ ()=>setColor("white")} >white</button>
   <h1 style={{color}}>Choose number</h1>

    <div className='flex justify-around'>

      <div>
     <h1 > {num1}</h1>
     <button onClick={()=>setNum1(num1 +1)} type='button'>+</button>
     <button onClick={()=>setNum1(num1 -1)} type='button'>-</button>

     </div>
     <div>
     <h1>{num2}</h1>
     <button onClick={()=>setNum2(num2 +1)} type='button'>+</button>
     <button onClick={()=>setNum2(num2 -1)} type='button'>-</button>

     </div>
     </div>
<button onClick={()=>setAdd(num1 + num2)}>Sum</button>
<button onClick={()=>setSub(num1 - num2)}>Sub</button>
<button onClick={()=>setMul(num1 * num2)}>Multipale</button>
<button onClick={()=>setDiv(num1 % num2)}>divied</button>
<div>
<h1>Sum: {add}</h1>
<h1>Sub:{sub}</h1>
<h1>Multipale:{mul}</h1>
<h1>Divied:{div}</h1>
</div>
    
    </div>
  )
}

export default App
