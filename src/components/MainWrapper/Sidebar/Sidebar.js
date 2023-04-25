import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.scss'
import { sidebarSlide } from 'functions/sidebarControl/sidebarSlide'

const Sidebar = props => {
  const yearClickHandler = () =>{
    document.getElementById('focusedMonth').classList.remove('focusedMonthVisible')
    document.getElementById('yearPicker').classList.remove('yearPickerHidden')
    sidebarSlide()
  }
  
  
  
    return (
    <div id='sidebar' className='sidebarWrapper'>
        <div className='sidebarLogo'></div>
        <span className='sidebarButtonDivider' />
        <div className='sidebarDatesRange'>
            <div className='sidebar-year sidebar-button' onClick={()=>yearClickHandler()}>
                <p>Year</p>
            </div>
            <div className='sidebar-month sidebar-button'>
                <p>Month</p>
            </div>
            <div className='sidebar-day sidebar-button'>
                <p>Day</p>
            </div>
        <span className='sidebarButtonDivider' />
        <div className='sidebarActions sidebar-button'>
            <div className='todayDate'>
                <p>
                    Today
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar