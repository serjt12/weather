import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import notFound from '../styles/nf.svg';

import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';
import Details from './Details';

function App () {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/forecast/:city' component={Forecast} />
          <Route exact path='/details/:city' component={Details} />
          <Route render={() => {
            return (
              <div className='not-found-container'>
                <p className='city-name'>Page Not Found</p>
                <img className='not-found-img' src={notFound} alt='Not Found' />
              </div>
            )
          }} />
        </Switch>
      </div>
    </Router>)
}

export default App
