import React, { Component } from 'react';
import api from '../utils/api';
import Loading from './Loading';
import DayWeather from './DayWeather';


class Forecast extends Component{
  constructor(props){
    super(props);

    this.state = {
      city: this.props.match.params.city,
      weatherData: [],
      loading: true

    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log("State:",this.state.city);
    // console.log("NEXTP:", nextProps.match.params.city);
    const citynow = this.state.city;
    const citynext = nextProps.match.params.city;

    if( citynext !== citynow){
      this.request(citynext)
    }
  }

  componentWillMount() {
    const city = this.state.city
    this.setState(function () {
      return {
        loading: true
      }
    })
    api.fetchWeather(city)
      .then(res => {
        // console.log("WILL MOUNT", res.city.name)
        this.setState(function(){
          return{
            weatherData: res,
            loading: false
          }
        });
      });
  }

  request(city){
    this.setState(function () {
      return {
        loading: true
      }
    })
    api.fetchWeather(city)
      .then(res => {
        // console.log("WILL RECEIVE", res.city.name);
        // console.log(res.list[0].weather)
        // console.log(res)
        this.setState(function(){
          return{
            weatherData: res,
            loading: false
          }
        });
      });
  }

handleClick(city){
  this.props.history.push({
    pathname: `/details/${this.state.city}`,
    state: this.state.city,
  })
}



  render () {
    // const name = this.state.weatherData.city.name
    // console.log("STATE:",this.state)

    return (
      this.state.loading === true
      ? <Loading text="We are looking the weather" />
      :
      <section>
      <h1 className='city-name'>{this.state.weatherData.city.name}</h1>
        <div className="forecast-container">
          {this.state.weatherData.list.map(function(listData){
            return <DayWeather onClick={this.handleClick.bind(this, listData)} key={listData.dt} day={listData} />
          },this)}
        </div>
      </section>
    )
  }
}

export default Forecast;
