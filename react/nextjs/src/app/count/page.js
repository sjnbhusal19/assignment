'use client'
import React,{useState} from 'react'

const page = () => {
  let [number,setNumber]=useState(3)

  const increment =()=>{
    if (number===10) return;
    setNumber(number+1)
    
  }

    const decrement =()=>{
      if (number===0) return;

      setNumber(number-1)
  }
 
    return (
    <div>
      <button onClick={increment}>+</button>
        {number}
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default page