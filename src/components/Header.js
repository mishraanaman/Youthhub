import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import ProfileDropDown from './ProfileDropDown.js'
import Search from './Search';
import { useTheme } from '../utils/helper';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const { darkMode, toggleDarkMode } = useTheme();

    
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
        <div>
        <div className={`flex justify-between p-5 shadow-lg ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
                <div className='flex flex-space-between h-8'>
                   <img className="w-10 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src='https://imgs.search.brave.com/mDTQHE4hGIFK4A2xurF8v_MYOBgpgdMzuAju3-CBIQU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbW9zdC11c2Vm/dWwtaWNvbnMtNC81/MC9IQU1CVVJHRVJf/TUVOVS01MTIucG5n' />
                   <a href="/"><img className="ml-2 mr-0 mt-0 mb-4 w-30 h-16" alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' /></a> 
                </div>
                
                <div className="search flex h-8">
                   <Search setSearchQuery={setSearchQuery}/>                
                </div>
                
                <div className="user info">
                    <ProfileDropDown/>
                </div>
            </div>
        </div>
            
    )
}

export default Header


