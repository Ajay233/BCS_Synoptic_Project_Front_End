import React from 'react';
import { Router, Route } from 'react-router-dom'
import Home from './home'
import history from './history'

import "./stylesheets/main.css"
import "./stylesheets/inputs.css"
import "./stylesheets/buttons.css"
import "./stylesheets/lists.css"
import "./stylesheets/notification.css"
import "./stylesheets/modal.css"

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <Route path="/" exact render={()=> <Home />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
