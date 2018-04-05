import React, {Component} from 'react';
import api from '../utils/api';
import {withRouter} from 'react-router'

class Search extends Component {

  state = {
    city: 'St. George, Utah',
    weatherData: []
  };

  componentWillMount() {
    const city = this.state.city
    api.fetchWeather(city).then(res => {
      this.setState({weatherData: res, loading: false});
    });
  }

  handleOnClick = (e) => {
    e.preventDefault()
    const {state: {
        city
      }} = this;
    if (city === 'St. George') {
      const {state: {
          weatherData
        }} = this
      this.props.history.push({pathname: '/forecast/St. George, Utah', state: weatherData})
    } else {
      const {state: {
          weatherData
        }} = this;
      this.props.history.push({
        pathname: `/forecast/${city}`,
        state: weatherData
      })
    }
  }

  handleOnFocus = () => {
    this.setState({city: 'St. George, Utah'})
  }

  handleOnBlur = () => {
    const {state: {
        city
      }} = this;
    (city === '')
      ? (this.setState({city: 'St. George, Utah'}))
      : (this.setState({city}))
  }

  handleOnChange = (e) => {
    const city = e.target.value;
    this.setState({city});
  }

  render() {
    return (<form className='search-container'>
      <input
        type='text'
        className='text-box'
        placeholder='St. George, Utah'
        onChange={this.handleOnChange}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}/>
      <button type='submit' onClick={this.handleOnClick} className='btn-main'>
        Get Weather
      </button>
    </form>)
  }
}

export default withRouter(Search);
