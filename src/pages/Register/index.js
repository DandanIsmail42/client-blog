import React from 'react'
import  './register.scss'
import { RegisterBg } from '../../assests'
import {Button, Input, Gap, Link} from '../../components'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className='left'>
           <img src={RegisterBg} alt='register' className='bg-image' />
        </div>
        <div className='right'>
            <p className='title'>
                Registrasi
            </p>
            <Gap height={15} />
            <Input label="full name" placeholder="full name"/>
            <Gap height={15} />
            <Input label="email" placeholder="email" />
            <Gap height={15} />
            <Input label="password" placeholder="password"/>
            <Gap height={20} />
            <Button title='Register' />
            <Gap height={40} />
            <Link title="Back to login" onClick={() => navigate('/login')}/>
        </div>
    </div>
  )
}

export default Register