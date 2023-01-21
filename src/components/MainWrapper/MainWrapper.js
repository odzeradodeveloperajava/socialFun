import React from 'react'
import Header from 'components/Header/Header.js'
import Cats from 'components/Cats/Cats.js'
import 'components/MainWrapper/MainWrapper.css'
import addCatsToState from 'functions/addCatsToState/addCatsToState'

const MainWrapper = () => {
  addCatsToState()
  return (
    <div className='mainWrapper'>
        <Header />
        <Cats />
    </div>
  )
}

export default MainWrapper