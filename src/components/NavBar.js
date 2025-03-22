import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const isMenuOpen = useSelector((store)=>store.global.isMenuOpen)
    const isDark = useSelector((store)=> store.global.isDark)
    const list = [{
        logo:"",
        name:"Home"
    },{
        logo:"",
        name:"Shorts"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    },{
        logo:"",
        name:"Subscriptions"
    }]
    if(!isMenuOpen) return null
  return (
    <div className={`${isDark?"bg-black text-white":"bg-white"} p-4 shadow-lg h-100svh`}>
        <ul className={``}>
            {
                list.map((item,index)=>(
                    <Link to={'/'}><li key={index} className={`p-1`}>{item.name}</li></Link>
                ))
            }
        </ul>
    </div>
  )
}

export default NavBar