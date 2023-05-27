import React from 'react'
import Button from './Button.js'
import { useTheme } from '../utils/helper.js'


const list =["Cooking", "Live", "Gaming", "Soccer", "Stocks", "Podcasts"]
export const ButtonList = () => {

  const { darkMode } = useTheme();

  return (
    <div className={`flex  ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
    {list.map((obj) => <Button key={obj} name={obj} />)}    
    </div>
  
  )
}

export default ButtonList;