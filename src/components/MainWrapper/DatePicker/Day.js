import { getMontName } from "functions/calendarHelper/calendarHelper";
import React from "react";
import './Day.css'

export default function Day({ day, rowIdx, iterator }) {

  


    //console.log(day.format('DD'))
    const name = () =>{
    if(day.format('MMMM') === getMontName(iterator)){
        return 'cur day'
    } else {
        return 'notcur day'
    }}
  return (
    <div className={name()}>
        {day.format("D")}
    </div>
  );
}