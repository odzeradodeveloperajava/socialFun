
import React, { useState, useEffect, cloneElement, useRef } from "react";
import { getMonthName, getYear } from "functions/calendarHelper/calendarHelper";
import './DatePicker.css'
import scrollToCurrentMonth from "functions/scrollToCurrentMonth/scrollToCurrentMonth";
import offset from 'document-offset'

export default function DatePicker({month, iterator, children}) {

  const currentMonthElement = useRef(null);

  useEffect(()=>{
    //console.log(currentMonthElement.current)
    scrollToCurrentMonth()
    if(currentMonthElement.current == 'null'){
      return null
    } else {
      //console.log(offset(currentMonthElement.current))
    }
  },[])

  const name = () =>{
    if(getMonthName(iterator) === getMonthName() && getYear(iterator) === getYear()){
      return "current"
    } else {
      return "notCurrent"
    }
  }
  const createClassName = (rowData) =>{
    return rowData.map(x => x.format('DD-MM-YY')).join(' ')+' linex';
  }

  return (
    <>
      <div className={name()} id={name()} ref={currentMonthElement}>
        <h1 className='monthName'>{[getMonthName(iterator),' ', getYear(iterator)]}</h1>
          <div className="datePicker">
            {month.map((row, i) => (
              <React.Fragment key={i}>
                <div className="row" key={i}>
                  {row.map((day, idx) => (
                    cloneElement(children,{day, key: idx, rowIdx: i, iterator, month: getMonthName(iterator)})
                  ))}
                </div>
              <div className={createClassName(row)}>
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