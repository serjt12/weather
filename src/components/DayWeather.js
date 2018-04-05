import React, {Component} from 'react'
import PropTypes from 'prop-types'
import getDate from '../utils/helpers'
import { withRouter } from 'react-router'

class DayWeather extends Component {

  handleOnClick = () => {
  const {props: {match: {params: {city}}}} = this
  this.props.history.push({
    pathname: `/details/${city}`,
    state: this.props.day
  })
}
  render () {
    const {props: {day: {dt}}} = this
    const date = getDate(dt)
    const {icon} = this.props.day.weather[0]
    return (
      <div onClick={this.handleOnClick} className='day-container'>
        <img className='weather-icon' src={'../images/' + icon + '.svg'} alt='Weather' />
        <h2 className='date'>{date}</h2>
      </div>
    )
  }
}

DayWeather.propTypes = {
  day: PropTypes.object
}

export default withRouter(DayWeather)
