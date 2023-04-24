import React, { useEffect, useState } from 'react';

const Suggestions = ({ search, showSuggestions }) => {

  const [suggestions, setSuggestions] = useState('');

  useEffect(()=>{
   getSearchSuggestions()
  },[search])

  const getSearchSuggestions = async()=>{
    const data = await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+search)
    const json = await data.json();
    setSuggestions(json[1]);

    console.log({suggestions})
  }

  return (showSuggestions && suggestions? 
    <div className='absolute flex flex-wrap'> {suggestions.map((item)=><h1>{item}</h1>)}</div>
   : null)

};

export default Suggestions;
