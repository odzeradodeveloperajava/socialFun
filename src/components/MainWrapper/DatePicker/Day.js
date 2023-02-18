import { getMonthName , getYear, getCurrDateArr} from "functions/calendarHelper/calendarHelper";
import React, { useEffect, useState } from "react";
import './Day.scss'
import dayjs from "dayjs";

export default function Day({ day, key,  rowIdx, iterator, month }) {

  const currentMonth = getMonthName()
  const clickHandler = () =>{
    const activeElement = () => document.getElementsByClassName('lineActive')
    console.log(activeElement()[0])
    const closeActive = () => activeElement().length == 0  ? null : activeElement()[0].classList.remove('lineActive')
    closeActive()
    const element = () => document.getElementsByClassName(day.format('DD-MM-YY'))
    console.log(element()[0])
    const checkDay = day.format('DD') < 15 ? element().length-1 : 0;
    element()[checkDay].classList.add("lineActive");

  }

  const isDayFromCurrentMonth = () =>{
    const compare = day.format('MMMM') === month ? true : false;
    return compare
  }

    const name = () =>{
      if(day.format('YYYY') === getYear()){
        if(month === currentMonth){
          if(day.format('MMMM')  === currentMonth){
            if(day.format('DD') === getCurrDateArr()[0]) {
              return 'day today'
            } else{
              return 'cur day'
            }

            //return 'cur day'
          } else {
              return 'day'
          }
        } else {
            if(day.format('MMMM') === month){
              return 'day'
            } else {
              return 'day'
            }
        }
      } else{
        return 'day'
      }
    }

    const tday = isDayFromCurrentMonth() ? (
      <div className={name()} onClick={()=>clickHandler()}>
      {day.format("D")}
      </div>
    ) : (
      <div></div>
    )

  return (
  tday
  );
}