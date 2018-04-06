import React from 'react';
import Search from './Search';

function Home () {
  return (
    <div className='main-box'>
      <div className='central'>
        <h2>Enter a City and State</h2>
        <Search />
      </div>
    </div>
  )
}

export default Home
