import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import { useTheme } from '../utils/helper'


const WatchPage = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    //console.log(searchParams.get("v"))
    const { darkMode, toggleDarkMode } = useTheme();


    const dispatch = useDispatch()
    useEffect(() => { dispatch(closeMenu) }, [])

    return (
        <div className={`px-5 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}><iframe width="1200" height="700" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    )
}

export default WatchPage