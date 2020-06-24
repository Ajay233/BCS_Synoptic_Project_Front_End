import React from 'react';
import { Router, Route } from 'react-router-dom'
import Home from './home'
import LoginForm from './authentication/forms/loginForm'
import NavBar from './navBar/navBar'
import QuizSearch from './quizSearch/quizSearch'
import AllQuizzes from './quizSearch/allQuizzes'
import QuizView from './quizView/quizView'
import history from './history'

import "./stylesheets/main.css"
import "./stylesheets/inputs.css"
import "./stylesheets/buttons.css"
import "./stylesheets/lists.css"
import "./stylesheets/notification.css"
import "./stylesheets/modal.css"
import "./stylesheets/navbar.css"

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <NavBar />
          <Route path="/" exact render={()=> <Home />} />
          <Route path="/login" render={()=> <LoginForm />} />
          <Route path="/quizSearch" render={()=> <QuizSearch />} />
          <Route path="/allQuizzes" render={()=> <AllQuizzes />} />
          <Route path="/quizView" render={()=> <QuizView />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
