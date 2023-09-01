import React from 'react'
import './link.scss'
const Link = ({title, onClick}) => {
  return (
        <p className='Link' onClick={onClick}>{title}</p>
  )
}

export default Link