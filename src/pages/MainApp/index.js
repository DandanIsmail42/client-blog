import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import { Footer, Header } from '../../components'
import './mainApp.scss'


const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <Header />
      <div className='content-wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-blog' element={<CreateBlog />} />
              <Route path='/detail-blog' element={<DetailBlog />} />
            </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default MainApp