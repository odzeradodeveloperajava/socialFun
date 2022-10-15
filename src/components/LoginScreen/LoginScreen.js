import React, {useEffect, useState} from 'react'
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom'
import createUser from '../../functions/firebase/createUser';
import loginUser from '../../functions/firebase/loginUser';
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn';
import { connect } from 'react-redux';



const LoginScreen = ({isLoggedIn, userDetails, errorCode}) => {

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
}

const handleChangeEmail = (e) =>{
  setEmail(e.target.value)
}
const handleChangePassword = (e) =>{
  setPassword(e.target.value)
}
  return (
    <div className='loginScreen'>
    <div className='helper'>
      <div> You are logged in : {isLoggedIn.toString()} </div>
      <div> You are logged in : {userDetails.toString()} </div>
    </div>
    <div className='loginScreen--wrapper'>
      <form className='loginForm'>
          <h1 className='welcome'>Login</h1>
          <h1 className='errorlogin'>{errorCode}</h1>
          <label className='label'>Email</label>
          <input className='input' type='text' placeholder='email' onChange={handleChangeEmail} value={email} />
          <label className='label'>Password</label>
          <input className='input' type='password' placeholder='password' onChange={handleChangePassword} value={password}/>
          <button className='button buttonLogin' type='submit' onClick={handleSubmit} >Log In</button>
          <button className='button buttonCreateuser' onClick={()=>createUser()}>Create User</button>
      </form>
        
        
    </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.socialFun.isLoggedIn,
      userDetails: state.socialFun.userDetails,
      errorCode: state.socialFun.errorCode
  }
}

export default connect(mapStateToProps)(LoginScreen)
//<button onClick={()=>isUserLoggenIn()}>is loggen in?</button>