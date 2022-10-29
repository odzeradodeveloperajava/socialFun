import React from 'react'
import firebaseLogOut from 'functions/firebaseLogOut/firebaseLogOut'
import 'components/Header/Header.css'
import { useNavigate } from 'react-router-dom'
import store from 'redux/store';
import { toggleUserIsLoggedIn, setLoggedUserDetails } from '../../redux/reducers';




const Header = () => {

  const navigate = useNavigate()
  const LogOutHandler = () =>{
    console.log('wylogowanie')
    firebaseLogOut();
    navigate('/')
    store.dispatch(toggleUserIsLoggedIn(false));
  }

  return (
    <div className='headerWrapper'>
        <div className='headerLogo'>
            SocialFun!
        </div>
        <div className='userinfo'>
            <div className='avatar'></div>
            <div className='username'>Best Slav88</div>
        </div>
        <div className='controls'>
            <div className='headeroptions'></div>
            <div className='headerlogout' onClick={()=>LogOutHandler()}></div>
        </div>
    </div>
  )
}

export default Header