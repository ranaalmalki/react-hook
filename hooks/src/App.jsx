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

  const [imgchange , setImgchange] =useState(false)
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
<div className='flex gap-4 p-10'>
<h3 className='card shadow-md shadow-emerald-300'>Sum: {add}</h3>
<h3 className='card shadow-md shadow-red-200'>Sub:{sub}</h3>
<h3 className='card shadow-md shadow-yellow-200'>Multipale:{mul}</h3>
<h3 className='card shadow-md shadow-lime-200'>Divied:<span>{div}</span></h3>
</div>
    <button onClick={()=>setImgchange(!imgchange)}>{imgchange ?'Hide content':'show content'}</button>
    {imgchange &&(
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ef9b039-d5e7-44d1-a702-75c18817ce3c/d6cgngj-7596d761-bf5d-4b50-853e-546869ad7dc4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZjliMDM5LWQ1ZTctNDRkMS1hNzAyLTc1YzE4ODE3Y2UzY1wvZDZjZ25nai03NTk2ZDc2MS1iZjVkLTRiNTAtODUzZS01NDY4NjlhZDdkYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fSKdKXtwMAcAQLl9p6DgqcFw0ZMCgdG4HHdYTIXrTaY" alt=""/>
  )}
    </div>
  )
}

export default App
