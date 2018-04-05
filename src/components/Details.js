import React, { Component } from 'react'
import DayWeather from './DayWeather'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Back from '../styles/arrows.svg'

class Details extends Component {
  render () {
    const {props: {location: {state: data}}} = this
    const {props: {match: {params: {city}}}} = this
    return (
      <div className='details-container'>
        <Link to={`/forecast/${city}`}><img src={Back} alt='Back Arrow' className='back-arrow' /></Link>
        <DayWeather day={data} />
        <div className='description-details'>
          <p className='city-name-details'>{city}</p>
          <p>{data.weather[0].description}</p>
          <p className='min-temp'>min temp: {data.temp.min} °C</p>
          <p className='max-temp'>max temp: {data.temp.max} °C</p>
          <p>humidity: {data.humidity}</p>
        </div>
      </div>
    )
  }
}
Details.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
}

export default Details
