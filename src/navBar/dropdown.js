import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = (props) => {

  const renderOptions = () => {
    return props.loggedIn ? renderPostLoginOptions() : renderPreLoginOptions();
  }

  const renderPreLoginOptions = () => {
    return(
      <React.Fragment>
        <div className="dropdown-option"><Link className="dropdown-link" to="/login">Log in</Link></div>
      </React.Fragment>
    );
  }

  const renderPostLoginOptions = () => {
    const { permission } = props
    return(
      <React.Fragment>
        <div className="dropdown-option"><Link className="dropdown-link" to="/quizSearch">Search Quizzes</Link><hr/></div>
        <div className="dropdown-option"><Link className="dropdown-link" to="/allQuizzes">View All Quizzes</Link><hr/></div>
        { permission !== "Edit" ? null : <div className="dropdown-option"><Link className="dropdown-link" to="/quizNew">Create Quiz</Link><hr/></div> }
        <div className="dropdown-option"><Link className="dropdown-link" to="/" onClick={props.logout}>Log out</Link></div>
      </React.Fragment>
    );
  }


  return(
    <div className="dropdown">
      {renderOptions()}
    </div>
  );
}

export default DropDown;
