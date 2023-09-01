
import React, {useEffect, useState} from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const  [dataBlog, setDataBlog] = useState([])
  const dispatch = useDispatch()
  const stateGlobal = useSelector(state => state)
  console.log('state global ',stateGlobal)


  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'UPDATE_NAME'})
    }, 3000)


    axios.get('http://localhost:5000/v1/blog/post') 
    .then(result => {
      const response = result.data
      setDataBlog(response.data)
      dispatch({type: 'UPDATE_DATA_BLOG', payload: response.data})
    })
    .catch(err => {
      console.log('err :', err)
    })
  }, [dispatch])
   
  
  const navigate = useNavigate()
  
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title="Create Blog" onClick={() => navigate('/create-blog')} />
      </div>
      <p>{stateGlobal.name}</p>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlog.map((blog, i) => {
          return(
            <BlogItem
            key={i}
            blog={blog}
            />
          )
        })}
      </div>
      <div className='pagination'>
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home