import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import ProfileDropDown from './ProfileDropDown.js'
const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    
    useEffect(()=>{

        //Debouncing
        //make an API call after every key press
        //but if the difference between 2 APIs is lesss than 200ms
        //decline the API call
        const timer = setTimeout(()=>getSearchSuggestions(),200)


        return ()=>{
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = data.json();
        setSuggestions(json)
    }

    const dispatch = useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    return (
        <>
            <div className="flex justify-between p-5 m-2 shadow-lg">

                <div className='flex flex-space-between h-8'>
                    <img className="mx-2 w-10 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src='https://imgs.search.brave.com/mDTQHE4hGIFK4A2xurF8v_MYOBgpgdMzuAju3-CBIQU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbW9zdC11c2Vm/dWwtaWNvbnMtNC81/MC9IQU1CVVJHRVJf/TUVOVS01MTIucG5n' />
                   <a href="/"><img className="w-32 h-10" alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' /></a> 
                </div>
                <div className="search flex h-8">
                    <input type="text" placeholder='Search' className='p-2 w-80 rounded-l-full border border-grey-600' onChange={(e)=>setSearchQuery(e.target.value)}/>
                    <button className="bg-gray-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-r-full border border-grey-600"><img src='https://imgs.search.brave.com/EYks0Du6fcC6MqPXURbKZTTBd6SWz_MkttS0Pd7QwNY/rs:fit:1068:1063:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy8xNS0xNTMxODBf/c2VhcmNoLWJ1dHRv/bi1zZWFyY2gtc3lt/Ym9sLXN2Zy1jbGlw/YXJ0LnBuZw' className='h-4' /></button>
                </div>
                
                <div className="user info">

                    <ProfileDropDown/>
                </div>
            </div>

        </>
    )
}

export default Header


