'use client'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";
import { FaHeart, FaLaughSquint,FaRegAngry } from "react-icons/fa";




const facebook = () => {
    const [color,setColor]= useState ('gray')
    const [reaction,setReaction]=useState('love')
    const [reactionDivOpen,setReactionDivOpen]=useState(false) 

    const ReactionButton=()=>{
      return(
        <div className='w-36 bg-gray-200 shadow-lg rounded-2xl shadow-xl'>
        <button onMouseLeave ={() => handleColorChange()}className=' p-2 '> <GrLike color='blue'/>
        </button>
        <button onMouseLeave ={() => handleColorChange()}className=' p-2 '> <FaHeart color='crimson'/>
       </button>
       <button onMouseLeave ={() => handleColorChange()}className=' p-2 '> <FaLaughSquint color='orange'/>
       </button>
       <button onMouseLeave ={() => handleColorChange()}className=' p-2 '> <FaRegAngry color='red'/>
       </button>
        </div>
      )
    }
    const generateReactionButton =()=>{
      if (reaction === 'like') {
        return (
          <button onMouseEnter ={() => setReactionDivOpen(true)}className='bg-gray-200 p-2 rounded-md shadow-lg '> <GrLike color={color}/>
         </button>
        )
      }else if (reaction === 'love'){
        return (
        <button onMouseEnter ={() => setReactionDivOpen(true)}className='bg-gray-200 p-2 rounded-md shadow-lg '> <GrLike color={color}/>
        </button>
        )
      }else if (reaction=== 'haha'){
        return (
          <button onMouseEnter ={() => setReactionDivOpen(true)}className='bg-gray-200 p-2 rounded-md shadow-lg '> <GrLike color={color}/>
          </button> 
        )
      }else if (reaction === 'angry'){
        return (
          <button onMouseEnter ={() => setReactionDivOpen(true)}className='bg-gray-200 p-2 rounded-md shadow-lg '> <GrLike color={color}/>
        </button>
        )
      }
      }

  return (
    <div>
        Like<br/>
        <div>
        {reactionDivOpen ? <ReactionButton/> : null}
       {generateReactionButton()}
       </div>
        </div>
  )
}

export default facebook;