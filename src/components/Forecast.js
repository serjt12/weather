import React, { Component } from 'react';
import api from '../utils/api';
import Loading from './Loading';
import DayWeather from './DayWeather';


class Forecast extends Component{
    state = {
      city: this.props.match.params.city,
      weatherData: [],
      loading: true
    }

  componentWillReceiveProps(nextProps) {
    const { state: {city: {citynow}}} = this;
    const citynext = nextProps.match.params.city;
    if( citynext !== citynow){
      this.request(citynext)
    }
  }

  componentWillMount() {
    const city = this.state.city
    this.setState({
        loading: true
    })
    api.fetchWeather(city)
      .then(res => {
        this.setState({
            weatherData: res,
            loading: false
        });
      });
  }

  request(city){
    this.setState({
        loading: true
    })
    api.fetchWeather(city)
      .then(res => {
        this.setState({
            weatherData: res,
            loading: false,
            city: this.props.match.params.city
        });
      });
  }

  render () {
    const { state: { loading, weatherData }}= this
    return (
      (loading )
      ? (<Loading text="We are working to get you the weather" />)
      :
      <section>
      <h1 className='city-name'>{weatherData.city.name}</h1>
        <div className="forecast-container">
          {this.state.weatherData.list.map(function(listData){
            return <DayWeather key={listData.dt} day={listData} />
          })}
        </div>
      </section>
    )
  }
}

export default Forecast;
