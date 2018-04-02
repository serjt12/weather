import React, { Component } from 'react';
import api from '../utils/api';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={ city: ""}
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitCity = this.onSubmitCity.bind(this);
  }
  onSubmitCity(e){
    e.preventDefault();
    this.props.onSubmit(
      this.props.city,
    )
    this.setState({ city: '' })
  }

  onInputChange(e){
    const value = e.target.value;
    this.setState(()=> ({
      city: value
    }))
  }
  render () {

    return (
      <form onSubmit={this.onSubmitCity}>
        <input
        type='text'
        className='text-box'
        placeholder='St. George, Utah'
        onChange={this.onInputChange}
        />

        <button className='btn-main'>
          Get Weather
        </button>
      </form>
    )
  }
}

export default Search;
