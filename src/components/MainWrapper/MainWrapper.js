import React from 'react'
import Cats from './../Cats/Cats.js'
import Header from '../Header/Header.js'
import './MainWrapper.css'

const MainWrapper = () => {
  return (
    <div className='mainWrapper'>
        <Header />
        <Cats />
    </div>
  )
}

export default MainWrapper