import React, {useEffect, useState} from 'react'
import 'components/LoginScreen/LoginScreen.css'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import logIn from 'functions/authorization/logIn';
import createUser from 'functions/authorization/createUser';
import { setErrorCode } from 'redux/reducers';

const LoginScreen = ({isLoggedIn, userDetails, loginPending, errorCode, setErrorCode}) => {

  

  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn === true){
      navigate('/main')
    }
  },[isLoggedIn, navigate])
  const [currentAction, setCurrentAction] = useState('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const handleSubmit = async (e) =>{
    setErrorCode('')
    const sumbitAction = () => currentAction === 'Login' ? logIn(email,password) : createUser(email,password);
    e.preventDefault()
    sumbitAction()
    setEmail('')
    setPassword('')
    
  }
  const handleChangeAction = (e) =>{
    setErrorCode('')
    e.preventDefault()
    setCurrentAction(currentAction === 'Login' ? 'Create account' : 'Login')
  }
  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) =>{
    setPassword(e.target.value)
  }
  const pass = <label className='label'>Repeat password
  <input className='input' type='password' placeholder='Password' onChange={handleChangePassword} value={password}/>
</label>

//temp > to delete
  useEffect(()=>{
    console.log(currentAction)
  },[currentAction])

  return (
    <div className='loginScreen'>
         <div className='loginScreen--wrapper'>
            <form className='loginForm'>
              <h1 className='logo'>SocialFun</h1>
              <p className='welcome'>{currentAction}</p>
              <p className='errorlogin'>{errorCode}</p>
              <div className='fieldset'>  
                <label className='label'>Email
                  <input className='input' type='text' placeholder='Email' onChange={handleChangeEmail} value={email} />
                </label>
                <label className='label'>Password
                  <input className='input' type='password' placeholder='Password' onChange={handleChangePassword} value={password}/>
                </label>
              {currentAction === 'Create account' ? pass : null}
              </div>
              <button className='button buttonLogin' type='submit' onClick={handleSubmit} >Continue</button>
              <div className='dividerWrapper'>
                <span className='divider'>OR</span>
              </div>
              <button className='button buttonCreateuser' onClick={handleChangeAction}>{currentAction === 'Login' ? 'Create account' : 'Log in'}</button>
              <p>Fogotten password?</p>
            </form>
          </div>
      </div>
  )}  


const mapStateToProps = state => {
  return {
      isLoggedIn: state.socialFun.isLoggedIn,
      userDetails: state.socialFun.userDetails,
      errorCode: state.socialFun.errorCode,
      loginPending: state.socialFun.loginPending
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    setErrorCode: (error)=> dispatch(setErrorCode(error))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
