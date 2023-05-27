import React from 'react'
import { useTheme } from '../utils/helper'


const Button = ({name}) => {
  const { darkMode } = useTheme();

  return (
    <button className={`px-2 py-2 m-2   ${darkMode ? 'bg-zinc-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>{name}</button>
  )
}

export default Button