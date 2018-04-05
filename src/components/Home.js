import React from 'react'
import Search from './Search'

function Home () {
  return (
    <div className='main-box'>
      <div className='central'>
        <h1>Enter a City and State</h1>
        <Search />
      </div>
    </div>
  )
}

export default Home
