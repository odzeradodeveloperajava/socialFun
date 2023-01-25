
import React from "react";
import Day from "./Day";
import { getMonth } from "functions/calendarHelper/calendarHelper";
import './DatePicker.css'

export default function Month() {
const month = getMonth(1)
console.table(month)

  return (
    <div className="datePicker">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}