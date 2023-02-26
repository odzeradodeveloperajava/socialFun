
import React, { useState, useEffect, cloneElement, useRef } from "react";
import { getMonthName, getYear } from "functions/calendarHelper/calendarHelper";
import './DatePicker.css'
import scrollToCurrentMonth from "functions/scrollToCurrentMonth/scrollToCurrentMonth";
import offset from 'document-offset'

export default function DatePicker({ month, iterator, children}) {



  const currentMonthElement = useRef(null);
  const lastMonth = useRef(null);
  const name = () =>{
    if(getMonthName(iterator) === getMonthName() && getYear(iterator) === getYear()){
      return `current ${getMonthName(iterator)+getYear(iterator)}`
    } else {
      return `notCurrent ${getMonthName(iterator)+getYear(iterator)}`
    }
  }
  const createClassName = (rowData) =>{
    return rowData.map(x => x.format('DD-MM-YY')).join(' ')+' linex';
  }

  return (
    <>
      <div className={name()} id={name()} ref={name() === 'current' ? currentMonthElement : lastMonth}>
        <h1 className='monthName'>{[getMonthName(iterator),' ', getYear(iterator)]}</h1>
        <div className='daysOfTheWeek'>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
          <div className="datePicker">
            {month.map((row, i) => (
              <React.Fragment key={i}>
                <div className="row" key={i}>
                  {row.map((day, idx) => (
                    cloneElement(children,{day, key: idx, rowIdx: i, iterator, month: getMonthName(iterator)})
                  ))}
                </div>
              <div className={createClassName(row)}>
                <div className='eventBarTopRow'>
                  <button >x</button>
                </div>
              </div>
           </React.Fragment>
          ))}
      </div>
    </div>
    </>
  );
}
////<Day day={day} key={idx} rowIdx={i} iterator={iterator} />
//<div className={name()} id={name()} ref={currentMonthElement}>
//<h1 className='monthName'>{[getMonthName(iterator),' ', getYear(iterator)]}</h1>
//<div className="datePicker">
//  {month.map((row, i) => (
//    <React.Fragment key={i}>
//      <div className="row" key={i}>
//        {row.map((day, idx) => (
//          cloneElement(children,{day, key: idx, rowIdx: i, iterator, month: getMonthName(iterator)})
//        ))}
//      </div>
//    <div className={createClassName(row)}>
//          <div></div>
//    </div>
//    </React.Fragment>
//  ))}
//</div>
//</div>
//
//useEffect(()=>{
//  console.log(x)
//  const observer = new IntersectionObserver((entries)=>{
//            if(entries[0].isIntersecting === true){
//              if(last === true){
//                console.log('dodaje na koneic')
//                handler()
//              } else if( last === false) {
//                //console.log('moaj wyskoosc to', lastMonth.current.offsetHeight)
//                //console.log('aktualny sroll to ', document.documentElement.scrollTop)
//                handlerx(lastMonth.current.offsetHeight)
//                //console.log('dodaje minus')
//              }
//        }})
//
//  if(last === true || op === 0){
//    observer.observe(lastMonth.current)
//    }
//  if(currentMonthElement.current !== null || undefined){
//  var topPos = currentMonthElement.current.getBoundingClientRect().top;
//  window.scroll(null, topPos-30)
//  }
//})
//

