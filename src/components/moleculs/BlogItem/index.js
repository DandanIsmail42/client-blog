import React from 'react'
import './blogItem.scss'
import { Button } from '../../atoms'
const BlogItem = ({blog}) => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={`http://localhost:5000/${blog.image}`} alt='post' />
        <div className='content-detail'>
            <p className='title'>{blog.title}</p>
            <p className='author'>{blog.author.name} - {blog.author.date}</p>
            <p className='body'>{blog.body}</p>
            <Button title="View Detail" />
        </div>
    </div>
  )
}

export default BlogItem