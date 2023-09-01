import React from 'react'
import {Button, Gap, Input, Link, Textarea, Upload} from "../../components"
import './createBlog.scss'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='blog-post'>
        <Link title="Back to home page" onClick={() => navigate('/')} />
        <p className='title'>Create new blog post</p>
        <Input label="Post Title" />
        <Upload />
        <Textarea />
        <Gap height={20} />
        <div className='button-action'>
          <Button title="Save" />
        </div>
        <Gap height={20} />
    </div>
  )
}

export default CreateBlog