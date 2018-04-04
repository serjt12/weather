import React, { Component } from 'react';
import DayWeather from './DayWeather';

class Details extends Component{

  render () {
    // console.log('PROPS:',this.props);
    const props = this.props.location.state;
    // console.log(props)
    return (
      <div className='details-container'>
        <DayWeather day={props} />
        <div className='description-details'>
          <p className='city-name-details'>{this.props.match.params.city}</p>
          <p>{props.weather[0].description}</p>
          <p className='min-temp'>min temp: {props.temp.min} °C</p>
          <p className='max-temp'>max temp: {props.temp.max} °C</p>
          <p>humidity: {props.humidity}</p>
        </div>
      </div>
    )
  }
}

export default Details;
