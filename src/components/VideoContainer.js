import React, { useEffect, useState } from 'react'
import { MY_API_KEY, YOUTUBE_DATA_API } from '../utils/constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {
const [videos, setVideos] = useState([])

  useEffect(()=>{
    getVideos()
  })

  const getVideos=async ()=>{
    const data = await fetch(YOUTUBE_DATA_API+MY_API_KEY);
    const json = await data.json();
    setVideos(json.items)
  }

  if(videos.length ==0) return null;

  return (
    <div className='flex'>
    {videos.map((obj)=><div><VideoCard info={obj}/></div>)}
    </div>
    
  )
}

export default VideoContainer