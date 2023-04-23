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
    
    <div id="side-bar" className= {`p-5 shadow-lg h-screen overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`} style={{ width: "300px" }}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shorts">Shorts</Link></li>
            <li>Subscriptions</li>
            <li>-------------</li>
            <li>Library</li>
            <li>History</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
            <li>FC Barcelona</li>
            <li>F1</li>
            <li>Prasar Bharti</li>

        </ul>
    </div>
    
  )
}

export default Sidebar