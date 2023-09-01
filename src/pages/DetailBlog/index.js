import React from 'react'
import {RegisterBg} from '../../assests'
import './detailBlog.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from '../../components'

const DetailBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='detail-blog-wrapper'>
        <img className='img-cover' src={RegisterBg} alt='thumb' />
        <p className='blog-title'>Title</p>
        <p className='blog-author'>Author</p>
        <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link title="Back to home page" onClick={() => navigate('/')} />
    </div>
  )
}

export default DetailBlog