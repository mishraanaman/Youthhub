import React, { useEffect, useState } from 'react'
import { MY_API_KEY, YOUTUBE_DATA_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
const [videos, setVideos] = useState([])

  useEffect(()=>{
    getVideos()
  })

  const getVideos=async ()=>{
    const data = await fetch(YOUTUBE_DATA_API+MY_API_KEY);
    const json = await data.json();
    setVideos(json.items)
    console.log(videos)
  }

  if(!videos?.length) return <h1>No response from API</h1>;

  return (
    <div className='flex flex-wrap'>
    {videos.map((video)=><Link to={"/watch?v="+video.id} key={video.id}><div><VideoCard info={video}/></div></Link>)}
    </div>
    
  )
}

export default VideoContainer