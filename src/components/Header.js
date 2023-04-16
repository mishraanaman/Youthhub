import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    return (
        <>
            <div className="flex justify-between p-5 m-2 shadow-lg">

                <div className='flex h-8 justify-between'>
                    <img className="w-10 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src='https://imgs.search.brave.com/mDTQHE4hGIFK4A2xurF8v_MYOBgpgdMzuAju3-CBIQU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbW9zdC11c2Vm/dWwtaWNvbnMtNC81/MC9IQU1CVVJHRVJf/TUVOVS01MTIucG5n' />
                   <a href="/"><img className="w-32 h-14" alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' /></a> 
                </div>
                <div className="search flex h-8">
                    <input type="text" placeholder='Search' className='p-2 w-80 rounded-l-full' />
                    <button className="bg-gray-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-r-full"><img src='https://imgs.search.brave.com/EYks0Du6fcC6MqPXURbKZTTBd6SWz_MkttS0Pd7QwNY/rs:fit:1068:1063:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy8xNS0xNTMxODBf/c2VhcmNoLWJ1dHRv/bi1zZWFyY2gtc3lt/Ym9sLXN2Zy1jbGlw/YXJ0LnBuZw' className='h-4' /></button>
                </div>
                <div className="user info">
                    <img className='h-8' alt ="user-pic"src="https://imgs.search.brave.com/MVkxgCvk9BbBt-8q9QfuBPtpsGBnO21SeZG2AAd2Vnc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vcGVu/Y2xpcGFydC5vcmcv/aW1hZ2UvMjQwMHB4/L3N2Z190b19wbmcv/MjQ3MzE5L2Fic3Ry/YWN0LXVzZXItZmxh/dC0zLnBuZw" />
                </div>
            </div>

        </>
    )
}

export default Header


