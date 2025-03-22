import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleIsDark, toggleIsMenuOpen } from '../utils/globalSlice';

const Header = () => {
    const [search,setSearch] = useState("")
    const [searchSuggestions,setSearchSuggestions] = useState([])
    const [showSuggestions,setShowSuggestions] = useState(false)
    const dispatch = useDispatch();
    const toggleMenu = () =>{
        dispatch(toggleIsMenuOpen())
    }
    const toggleDark = () =>{
        dispatch(toggleIsDark())
    }
    useEffect(()=>{
        const timer = setTimeout(()=>getSuggestions(search),200)
        return ()=>{
            clearTimeout(timer)
        }
    },[search])
    const getSuggestions = async(search) =>{
        const json = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+search)
        const suggestions = await json.json()
        setSearchSuggestions(suggestions)
        console.log(suggestions)
    }
  return (
    <div className={`fixed top-0 w-full bg-white p-2 grid grid-flow-col overflow-y-auto`}>
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
                placeholder='Search'
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
            />
            <button
                className={`text-xl pl-5 pr-5 border border-gray-300 rounded-r-full bg-gray-100 cursor-pointer`}
            >🔍</button>
        {
                searchSuggestions[1]?.length!==0 && showSuggestions && (
                    <div className='fixed bg-white mt-12 z-10 w-[34rem] rounded-xl shadow-xl'>
                        <ul className='m-2 my-4'>
                        {
                            searchSuggestions[1]?.map((item)=>(
                                <li className='px-2 py-1 font-bold hover:bg-neutral-200 rounded-xl'>🔍 {item}</li>
                            ))
                        }
                    </ul>
    </div>
                )
            }
            
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