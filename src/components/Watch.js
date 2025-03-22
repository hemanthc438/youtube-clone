import React, { useEffect } from 'react'
import { closeMenu } from '../utils/globalSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const search = searchParams.get('v')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div>
        <iframe width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${search}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
    </div>
  )
}

export default Watch