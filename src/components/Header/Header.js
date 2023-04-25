import React from 'react'
import 'components/Header/Header.css'
import logOut from 'functions/authorization/logOut'
import { sidebarSlide } from 'functions/sidebarControl/sidebarSlide'

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className='headerLogo'>
            <button className='headerMenuButton' onClick={()=>sidebarSlide()}/>
        </div>
        <div className='userinfo'>

        </div>
        <div className='controls'>
            <button className='headerSettings' />
            <div className='headerlogout' onClick={()=>logOut()}></div>
        </div>
    </div>
  )
}

export default Header