import React from 'react'
import Header from 'components/Header/Header.js'
import Cats from 'components/Cats/Cats.js'
import 'components/MainWrapper/MainWrapper.css'
import addCatsToState from 'functions/addCatsToState/addCatsToState'
import Calendar from './Calendar/Calendar'
import DatePicker from './DatePicker/DatePicker'

const MainWrapper = () => {
  addCatsToState()
  return (
    <div className='mainWrapper'>
        <Header />
        <Calendar />
   
    </div>
  )
}

export default MainWrapper
//     <Cats />