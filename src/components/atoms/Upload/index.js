import React from 'react'
import './upload.scss'
import { LoginBg } from '../../../assests'
const Upload = () => {
  return (
    <div className='upload'>
        <img className='preview' src={LoginBg} alt='preview' />
        <input type='file' />
    </div>
  )
}

export default Upload