import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Home from './Home';

class App extends Component {
  render() {
    return (<Router>
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
            <Route render={function () {
              return <p>Page Not Found</p>
            }} />
        </Switch>
      </div>
    </Router>);
  }
}

export default App;
