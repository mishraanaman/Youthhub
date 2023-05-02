import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTheme } from '../utils/helper'

const Sidebar = () => {
  const isMenuOpen =useSelector((store)=>store?.app?.isMenuOpen)
  const { darkMode, toggleDarkMode } = useTheme();
  
  // let contentHeight
  // useEffect(()=>{
  //   const sideBarElement = document.getElementById('side-bar');
  //   contentHeight = sideBarElement.scrollHeight;

  // },[contentHeight])    ${contentHeight >= window.innerHeight? 'h-auto': 'h-screen'}
  
  //Early return pattern
  if(!isMenuOpen){return null}

  return (
    
    <div id="side-bar text-2xl m-2" className= {`p-5 shadow-lg h-screen overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`} style={{ width: "300px" }}>
        <ul>
            <li className='py-2'><Link to="/">Home</Link></li>
            <li className='py-2'><Link to="/shorts">Shorts</Link></li>
            <li className='py-2'><Link to="/subscriptions">Subscriptions</Link></li>
            <li>-------------</li>
            <li  className='py-2'>Library</li>
            <li  className='py-2'>History</li>
            <li  className='py-2'>Watch Later</li>
            <li  className='py-2'>Liked Videos</li>
        </ul>
        <h1 className="font-bold pt-5  className='py-2'">Subscriptions</h1>
        <ul>
            <li  className='py-2'>FC Barcelona</li>
            <li  className='py-2'>F1</li>
            <li  className='py-2'>Prasar Bharti</li>

        </ul>
    </div>
    
  )
}

export default Sidebar