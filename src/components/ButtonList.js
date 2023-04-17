import React from 'react'
import Button from './Button.js'


const list =["Cooking", "Live", "Gaming", "Soccer", "Stocks", "Podcasts"]
export const ButtonList = () => {
  return (
    <div className='flex'>
    {list.map((obj) => <Button name={obj} />)}    
    </div>
  
  )
}

export default ButtonList;