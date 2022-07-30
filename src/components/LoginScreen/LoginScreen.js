import React from 'react'
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom'
import createUser from '../../functions/firebase/createUser';
import loginUser from '../../functions/firebase/loginUser';
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn';

const LoginScreen = () => {
    const navigate = useNavigate();
  return (
    <div className='loginScreen--wrapper'>
        <button onClick={()=>navigate('/main')}>Click to login</button>
        <button onClick={()=>createUser()}>Create User</button>
        <button onClick={()=>loginUser()}>Login User</button>
        <button onClick={()=>isUserLoggenIn()}>is loggen in?</button>
    </div>
  )
}

export default LoginScreen