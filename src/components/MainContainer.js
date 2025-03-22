import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_MAIN } from '../utils/commons'
import VideoList from './VideoList'
import ButtonsList from './ButtonsList'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    let [videos,setVideos] = useState([])
    const isMenuOpen = useSelector((store)=> store.global.isMenuOpen)
    useEffect(()=>{
        getMainVideos()
    },[])
    const getMainVideos = async()=>{
        const videoData = await fetch(YOUTUBE_VIDEOS_MAIN)
        const videos = await videoData.json()
        setVideos(videos?.items)
    }
  return (
    <div className={`${isMenuOpen?"":"mx-10 "} `}>
      <div className='bg-white overflow-x-auto'>
        <ButtonsList/>
      </div>
      <div className='overflow-y-auto'>
        <VideoList videos={videos}/>
        </div>
    </div>
  )
}

export default MainContainer