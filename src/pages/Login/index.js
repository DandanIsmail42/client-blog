import React from 'react'
import { LoginBg } from '../../assests'
import {Button, Input, Gap, Link} from '../../components'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
    <div className='left'>
       <img src={LoginBg} className='bg-image' alt='loginbg'/>
    </div>
    <div className='right'>
        <p className='title'>
          Login
        </p>
        <Gap height={15} />
        <Input label="email" placeholder="email" />
        <Gap height={15} />
        <Input label="password" placeholder="password"/>
        <Gap height={20} />
        <Button title='Register' />
        <Gap height={40} />
        <Link title=" Don't have an account yet? please register" onClick={() => navigate('/register')}/>
        
    </div>
</div>
  )
}

export default Login