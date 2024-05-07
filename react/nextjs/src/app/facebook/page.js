'use client'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";

const page = () => {
    const [color,setColor]= useState ('gray')
    const handleColorChange=()=>{
        setColor('blue')
    }
  return (
    <div>
        Like<br/>
       <button className='bg-gray-200 p-2 border border-black'> <GrLike color={color}/></button>

        </div>
  )
}

export default page