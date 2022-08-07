import React, {useEffect, useState} from 'react'
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom'
import createUser from '../../functions/firebase/createUser';
import loginUser from '../../functions/firebase/loginUser';
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn';
import { async } from '@firebase/util';
import { connect } from 'react-redux';



const LoginScreen = ({isLoggedIn, userEmail, errorCode}) => {

const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

useEffect(()=>{
  if(isLoggedIn === true){
    navigate('/main')
  }
},[isLoggedIn, navigate])

const handleSubmit = async (e) =>{
  e.preventDefault()
  loginUser(password, email)
  setEmail('')
  setPassword('')
  console.log(await loginUser(password, email))

}

const handleChangeEmail = (e) =>{
  setEmail(e.target.value)
}
const handleChangePassword = (e) =>{
  setPassword(e.target.value)
}
  return (
    <>
    <div> You are logged in : {isLoggedIn.toString()} </div>
    <div> You are logged in : {userEmail.toString()} </div>
    <div className='loginScreen--wrapper'>
      <h1>{errorCode}</h1>
      <form>
         <input type='text' placeholder='email' onChange={handleChangeEmail} value={email} />
         <input type='password' placeholder='password' onChange={handleChangePassword} value={password}/>
        <button type='submit' onClick={handleSubmit} >Log In</button>
      </form>
        <button onClick={()=>createUser()}>Create User</button>
        <button onClick={()=>loginUser()}>Login User</button>
        <button onClick={()=>isUserLoggenIn()}>is loggen in?</button>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.socialFun.isLoggedIn,
      userEmail: state.socialFun.userEmail,
      errorCode: state.socialFun.errorCode
  }
}

export default connect(mapStateToProps)(LoginScreen)