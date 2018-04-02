import React, { Component } from 'react';
import Search from './Search';

class Header extends Component{
  render () {
    return (
      <div className='navbar'>
          <h1>City Weather</h1>
          <div className='search-nav'>
            <Search />
          </div>
      </div>
    )
  }
}

export default Header;
