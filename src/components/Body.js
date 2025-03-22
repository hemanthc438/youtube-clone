import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const isMenuOpen = useSelector((store)=> store.global.isMenuOpen)
  return (
    <div className='grid grid-cols-12 mt-14 overflow-auto'>
        <div className={` ${isMenuOpen?"min-w-52 col-span-2 ":" hidden"} h-full overflow-y-auto`}>
            <NavBar/>
        </div>
        <div className={` ${isMenuOpen?"col-span-10 ":"col-span-12"} overflow-y-auto`}>
         <Outlet/>
         </div>
    </div>
  )
}

export default Body