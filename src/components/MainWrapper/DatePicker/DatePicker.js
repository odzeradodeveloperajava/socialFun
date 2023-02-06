
import React, { useEffect, cloneElement } from "react";
import { getMonth, getMontName, getYear } from "functions/calendarHelper/calendarHelper";
import './DatePicker.css'
import scrollToCurrentMonth from "functions/scrollToCurrentMonth/scrollToCurrentMonth";


export default function DatePicker({month, iterator, children}) {



  useEffect(()=>{
    scrollToCurrentMonth()
  },[])

  const name = () =>{
    if(getMontName(iterator) === getMontName() && getYear(iterator) === getYear()){
      return "current"
    } else {
      return "notCurrent"
    } 
  }
  return (
    <div className={name()}>
        <h1 className='monthName'>{[getMontName(iterator), getYear(iterator)]}</h1>
        <div className="datePicker">
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                cloneElement(children,{day, key: idx, rowIdx: i, iterator})
              ))}
            </React.Fragment>
          ))}
        </div>
    </div>
  );
}
//<Day day={day} key={idx} rowIdx={i} iterator={iterator} />