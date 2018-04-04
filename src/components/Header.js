import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class Header extends Component{
  render () {
    return (
      <div className='navbar'>
          <Link className='logo' to='/'><h1>City Weather</h1></Link>
          <div className='search-nav'>
            <Search />
          </div>
      </div>
    )
  }
}

export default Header;
