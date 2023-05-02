import React, { useEffect, useState } from 'react';

const Suggestions = ({ search, showSuggestions }) => {

  const [suggestions, setSuggestions] = useState('');

  useEffect(()=>{
   getSearchSuggestions()

   return ()=>{clearTimeout(getSearchSuggestions())}

  },[search]
  )

  function getSearchSuggestions (){
    setTimeout(async()=>{
        const data = await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+search)
        const json = await data.json();
        setSuggestions(json[1]);
    
        console.log({suggestions})
      },2000)
  }



  return (showSuggestions && suggestions? 
    <div className='absolute bg-white rounded-lg'><ul className='p-2 text-xl'>{suggestions.map((item)=><li>{item}</li>)}</ul> </div>
   : null)

};

export default Suggestions;
