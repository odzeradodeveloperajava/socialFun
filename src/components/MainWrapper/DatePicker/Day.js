import {getCurrDateArr} from "functions/calendarHelper/calendarHelper";
import React, {useRef} from "react";
import './Day.scss'
export default function Day({ day, key,  rowIdx, iterator, month }) {

  const clickedMonth = useRef(null)

  const clickHandler = () =>{
    const scrolldiv = () =>  document.getElementById('scrollableDiv')
    console.log(scrolldiv())
    const activeElement = () => document.getElementsByClassName('lineActive')
    const closeActive = () => activeElement().length === 0  ? null : activeElement()[0].classList.remove('lineActive')
    closeActive();
    //(() => { return activeElement().length === 0  ? null : activeElement()[0].classList.remove('lineActive') })()
    const element = () => document.getElementsByClassName(day.format('DD-MM-YY'))
    const checkDay = day.format('DD') > 15 ? element().length-1 : 0;
    element()[checkDay].classList.add("lineActive")
    const monthActive = () => document.getElementsByClassName((day.format('MMMMYYYY')))
    console.log(monthActive()[0].offsetParent)
    const dupa = () => monthActive()[0].offsetParent.getElementsByClassName((day.format('MMMMYYYY')))
    console.log(dupa()[0])
    setTimeout(function(){scrolldiv().scroll({
      top: dupa()[0].offsetTop-30,
      left: null,
      behavior: 'smooth'
    })
    }, 160)
   

  }
    const styleDay = () => {
      const compareDate = ( day.format('DD-MM-YY') === getCurrDateArr()[0]) ? 'today' : ( (day.format('MM') === getCurrDateArr()[2] && day.format('YY') === getCurrDateArr()[3]) ? 'currentMonth' : 'everyDay' );
      return compareDate
    }
    if(day.format('MMMM') === month){
      return (
        <div className={styleDay()} onClick={()=>clickHandler()}>
        {day.format("D")}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
}