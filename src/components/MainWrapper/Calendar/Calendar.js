import React, {useEffect, useState} from 'react'
import DatePicker from './../DatePicker/DatePicker'
import {getMonth} from './../../../functions/calendarHelper/calendarHelper'
import Day from '../DatePicker/Day'
import InfiniteScroll from 'react-infinite-scroll-component'

const montsArray = [];
for (let i = -12; i <=12; i++){
  montsArray[i+12] = i
  //console.log(montsArray)
  if(i === 12){
    montsArray.sort((a,b)=> a-b)
  }
}

const bla = () => console.log('x')

const Calendar = () => {
  return (
    <div className='calendar'>
      <InfiniteScroll
      dataLength={5} //This is important field to render the next data
      next={()=>bla()}
      hasMore={true}
      loader={<h4>Loading...</h4>}

      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      >
      {<h1>blaa</h1>}
    </InfiniteScroll>
    {montsArray.map((x,i)=> <DatePicker key={x} month={getMonth(x)} iterator={x} children={<Day />}/>)}
    <InfiniteScroll
      dataLength={5} //This is important field to render the next data
      next={()=>bla()}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      >
      {<h1>blaa</h1>}
    </InfiniteScroll>
    </div>
    )
}

export default Calendar