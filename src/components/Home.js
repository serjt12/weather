import React, { Component} from 'react';
import Search from './Search';


class Home extends Component{
  render(){
    return(
      <div className='main-box'>
      <div className='central'>
        <h1>Enter a City and State</h1>
        <Search />
        </div>
      </div>

    )
  }
}

export default Home;
