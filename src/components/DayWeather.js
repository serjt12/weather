import React from 'react';
import getDate from '../utils/helpers';

function DayWeather (props){

  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  // const city = props.day.
  // console.log(props)
  return(
    <div onClick={props.onClick} className='day-container'>
      <img className='weather-icon' src={'../images/' + icon + '.svg'} alt='Weather' />
      <h2 className='date'>{date}</h2>
    </div>
  )
}

export default DayWeather;