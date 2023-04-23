import React, { useEffect } from 'react'
import { MY_API_KEY, YOUTUBE_SUBSRCRIPTIONS_API } from '../utils/constant'

const Subscriptions = () => {
  useEffect(()=>{
    getSubscriptions();
  })

  const getSubscriptions= async ()=>{
    const data= await  fetch(YOUTUBE_SUBSRCRIPTIONS_API+MY_API_KEY)
    const json = data.json();
  }
  return (
    <div>Subscriptions</div>
  )
}

export default Subscriptions
