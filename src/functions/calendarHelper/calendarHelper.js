
import dayjs from "dayjs";

function fib(n){
  const fibArr = new Array(n).fill(0);
  for(let i=0; i <= fibArr.length; i++){
    if(i === 0 || i === 1){
      fibArr[i] = 1
    } else{
    fibArr[i] = fibArr[i-2]+fibArr[i-1]
    }
    if(i === n-1){
      return fibArr[n-1]
    }
  }
}
console.log(fib(5))





export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
export function getMontName(month = dayjs().month()){
    const year = dayjs().year();
    //console.log('bla3', dayjs(new Date(year, month, 1)).format('MMMM'))
    return dayjs(new Date(year, month, 1)).format('MMMM')
}
export function getYear(month = dayjs().month()){
  const year = dayjs().year();
  //console.log('bla3', dayjs(new Date(year, month, 1)).format('MMMM'))
  return dayjs(new Date(year, month, 1)).format('YYYY')
}