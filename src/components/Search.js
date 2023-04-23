import React from 'react'
import Suggestions from './Suggestions'
import { SEARCH_LOGO } from '../utils/constant'

const Search = ({setSearchQuery}) => {
  return (
    <>
    <input type="text" placeholder='Search' className='p-2 w-80 rounded-l-full border border-grey-600' onChange={(e)=>setSearchQuery(e.target.value)}/>
    <button className="bg-gray-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-r-full border border-grey-600"><img src={SEARCH_LOGO} className='h-4' /></button>
    <Suggestions/>
    </>
    
  )
}

export default Search