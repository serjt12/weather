import React, { Component } from 'react';
import DayWeather from './DayWeather';

class Details extends Component{

  render () {
    // console.log('PROPS:',this.props.location.state);
    const props = this.props.location.state;
    console.log(props)
    return (
      <div>
        <DayWeather day={props} />
        <div className='description-container'>
          <p>{this.props.match.params.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {props.main.temp_min} degrees</p>
          <p>max temp: {props.main.temp_max} degrees</p>
          <p>humidity: {props.main.humidity}</p>
        </div>
      </div>
    )
  }
}

export default Details;
