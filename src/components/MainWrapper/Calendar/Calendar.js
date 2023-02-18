import React, {useEffect, useState} from 'react'
import DatePicker from './../DatePicker/DatePicker'
import {getMonth} from './../../../functions/calendarHelper/calendarHelper'
import Day from '../DatePicker/Day'


const montsArray = [];
for (let i = -12; i <=12; i++){
  montsArray[i+12] = i
  //console.log(montsArray)
  if(i === 12){
    montsArray.sort((a,b)=> a-b)
  }
}

const Calendar = () => {
  return (
    montsArray.map((x,i)=> <DatePicker key={x} month={getMonth(x)} iterator={x} children={<Day />}/>)
  )
}

export default Calendar