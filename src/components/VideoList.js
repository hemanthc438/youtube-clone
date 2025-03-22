import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const VideoList = ({videos}) => {
    const isMenuOpen = useSelector((store)=> store.global.isMenuOpen)
    console.log(videos)
  return (
    <div className={`grid ${isMenuOpen?'grid-cols-3 ':'grid-cols-4'}`}>
        {   
        videos.map((video)=>(    
          <Link to={"/watch?v="+video.id}>
            <VideoCard video={video}/>
            </Link>    
        ))
        }
    </div>
  )
}

export default VideoList