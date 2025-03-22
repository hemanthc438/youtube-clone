import React from 'react'
import Button from './Button'

const ButtonsList = () => {
    const buttonsList = ["apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple","apple"]
  return (
    <div className='flex w-11/12 '>
        {       
        buttonsList.map((item,index)=>(
            <Button key={index} name={item}/>
        ))
        }
    </div>
  )
}

export default ButtonsList