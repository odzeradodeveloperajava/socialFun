import React from 'react'
import Header from 'components/Header/Header.js'
import Cats from 'components/Cats/Cats.js'
import 'components/MainWrapper/MainWrapper.css'

const MainWrapper = () => {
  return (
    <div className='mainWrapper'>
        <Header />
        <Cats />
    </div>
  )
}

export default MainWrapper