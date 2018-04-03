import React, { Component } from 'react';
// import api from '../utils/api';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={ city: ""};

    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(){
    this.setState(()=> ({
      city: ''
    }))
  }

  onInputChange(e){
    const city = e.target.value;
    this.setState(()=> ({
      city
    }))
  }
  render () {

    const city = this.state.city
    // console.log('CITY',city)
    return (
      <div>
        <input
        type='text'
        className='text-box'
        placeholder='St. George, Utah'
        onChange={this.onInputChange}
        value={this.state.city}
        />

      <Link  onClick={this.handleOnClick} to={`/forecast/${city}`} className='btn-main'>
          Get Weather
        </Link>
      </div>
    )
  }
}

export default Search;
