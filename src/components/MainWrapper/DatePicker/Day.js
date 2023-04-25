import {getCurrDateArr} from "functions/calendarHelper/calendarHelper";
import React, {useRef} from "react";
import { connect } from "react-redux";
import './Day.scss'
import { toggleFocusedOnDay, setInitialSlide } from "redux/reducers";


const Day = ({ day, key,  rowIdx, iterator, month, isInYearView, toggleFocusedOnDay, setInitialSlide}) =>  {




  const clickHandler = () =>{
    const clickedDay = day.format('DD-MM-YY')
    const parentEl = document.getElementsByClassName('swiper-slide-active')[0]
    const parent = parentEl.getElementsByClassName('month')[0]
    const otherRows = parent.getElementsByClassName('row')
    const otherRowsArr = [].slice.call(otherRows)
    console.log(otherRowsArr)
    otherRowsArr.map((x,i)=> {
      if(x.id.includes(clickedDay)){
        otherRowsArr.splice(i,1)
        otherRowsArr.map( x => x.classList.toggle('rowHidden'))
        console.log('initial slide to ', i)
        setInitialSlide(i)
      }
    })
    setTimeout(toggleFocusedOnDay(true), 250)
    //toggleFocusedOnDay(true)
  }
  const clickHandler1 = () => {
    //const clickedDay = day.format('DD-MM-YY');
    //const activeSlide = document.querySelector('.swiper-slide-active');
    //const parent = activeSlide.querySelector('.month');
    //const otherRows = Array.from(parent.querySelectorAll('.row:not([id*="'+clickedDay+'"])'));
    //otherRows.forEach(row => row.classList.toggle('rowHidden'));
    toggleFocusedOnDay(true)
  };
  


    const styleDay = () => {
      const compareDate = ( day.format('DD-MM-YY') === getCurrDateArr()[0]) ? 'today' :  'everyDay' 
      const isFocused = isInYearView !== true ? (compareDate+' focused') : compareDate
      return isFocused
    }
    if(day.format('MMMM') === month){
      return (
        <div className={styleDay()} onClick={()=>clickHandler()}>
        {day.format("D")}
        </div>
      )
    } else {
      return (
        <div className="emptyDay"></div>
      )
    }
}
const mapStateToProps = state => {
  return {
      focusedOnDay: state.socialFun.focusedOnDay
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    toggleFocusedOnDay: (bool)=> dispatch(toggleFocusedOnDay(bool)),
    setInitialSlide: (num)=> dispatch(setInitialSlide(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)