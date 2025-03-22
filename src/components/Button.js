import React from 'react'

const Button = ({name}) => {
    console.log(name)
  return (
    <div
        className='m-2 px-2 py-1 bg-gray-200 rounded-xl'
    >{name}</div>
  )
}

export default Button