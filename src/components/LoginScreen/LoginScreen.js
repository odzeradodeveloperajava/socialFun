import React, {useEffect, useState} from 'react'
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom'
import createUser from '../../functions/firebase/createUser';
import loginUser from '../../functions/firebase/loginUser';
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn';
import { async } from '@firebase/util';
import { connect } from 'react-redux';



const LoginScreen = ({isLoggedIn, userEmail}) => {


  const navigate = useNavigate();
  return (
    <>
    <div> You are logged in : {isLoggedIn.toString()} </div>
    <div> You are logged in : {userEmail.toString()} </div>
    <div className='loginScreen--wrapper'>
        <button onClick={()=>navigate('/main')}>Click to login</button>
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
  }
}

export default connect(mapStateToProps)(LoginScreen)