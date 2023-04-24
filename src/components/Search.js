import React,{ useState, useEffect,  useRef } from 'react'
import Suggestions from './Suggestions'
import { SEARCH_LOGO } from '../utils/constant'

const Search = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] =useState(false);
  const inputRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);


  return (
    <>
    <input type="text" placeholder='Search' className='p-2 w-80 rounded-l-full border border-grey-600' onChange={(e)=>setSearchQuery(e.target.value)} onClick={()=>setShowSuggestions(true)}  ref={inputRef}/>
    <button className="bg-gray-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-r-full border border-grey-600"><img alt='search-logo'src={SEARCH_LOGO} className='h-4' /></button>
    {searchQuery?<Suggestions showSuggestions ={showSuggestions} search ={searchQuery}/>:null}
    </>
    
  )
}

export default Search