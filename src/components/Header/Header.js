import React from 'react'
import 'components/Header/Header.css'
import { useNavigate } from 'react-router-dom'
import logOut from 'functions/authorization/logOut'

const Header = () => {
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
            <div className='headerlogout' onClick={()=>logOut()}></div>
        </div>
    </div>
  )
}

export default Header