import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleIsDark, toggleIsMenuOpen } from '../utils/globalSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenu = () =>{
        dispatch(toggleIsMenuOpen())
    }
    const toggleDark = () =>{
        dispatch(toggleIsDark())
    }
  return (
    <div className={`fixed top-0 w-full bg-white p-2 grid grid-flow-col shadow-lg overflow-y-auto`}>
        <div className={`flex pl-3 col-span-1 items-center`}>
        <img 
            className={`h-5 cursor-pointer`}
            alt="ham" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
            onClick={()=>toggleMenu()}
            />
        <img 
            className={`h-5 mx-3 cursor-pointer`}
            alt="youtube" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            onClick={()=>toggleDark()}
            />
        </div>
        <div className={`flex col-span-9 justify-center`}>
            <input
            className={`w-1/2 border border-gray-300 rounded-l-full p-2`}
                type='text'
                value=""
                onChange={()=>{}}
            />
            <button
                className={`text-xl pl-5 pr-5 border border-gray-300 rounded-r-full bg-gray-100 cursor-pointer`}
            >🔍</button>
        </div>
        <div className={`flex col-span-2`}>
            <img
                className='h-8' 
                alt="user" 
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
        </div>
    </div>
  )
}

export default Header