import React, {useEffect, useState, useRef, useCallback} from 'react'
import DatePicker from './../DatePicker/DatePicker'
import {getMonth} from './../../../functions/calendarHelper/calendarHelper'
import Day from '../DatePicker/Day'
import InfiniteScroll from 'react-infinite-scroll-component'






const Calendar = () => {
  const initialArray = [4,3,2,1,0,-1,-2]
  const [months, setMonths] = useState(initialArray)
  const addMonthHandler = () => setMonths(x => [x[0]+1,...x ])
  const addMinusMonthHandler = () =>{
    setMonths(x => [...x, x[x.length-1]-1])
  }

  return (
    <React.Fragment>
      <div
        id="scrollableDiv"
        style={{
          height: 'calc(100vh)',
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          minWidth: '370px',
          maxWidth: '400px'
        }}
      >
    <InfiniteScroll
      dataLength={months.length} //This is important field to render the next data
      next={()=>addMinusMonthHandler()}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      style={{  display: "flex",
                flexDirection: "column-reverse",
                display: 'flex',
                alignItems: 'center',
                width: '100%' }}
      inverse={true}
      scrollableTarget="scrollableDiv"
      >
      {months.map((x,i)=>{
          return(
            <DatePicker monthArray={months} handlerx={(c)=>addMonthHandler(c)} key={i} month={getMonth(x)} iterator={x} children={<Day />} />
          )
      })}

    </InfiniteScroll>
    </div>
    </React.Fragment>
  )
}

export default Calendar
