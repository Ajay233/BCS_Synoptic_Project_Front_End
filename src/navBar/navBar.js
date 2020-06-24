import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showDropdown, hideDropdown } from './actions'
import { logOut } from '../authentication/actions'
import { setNotification } from '../notification/actions'
import DropDown from './dropdown'

class NavBar extends React.Component {

  logout = () => {
    const { logOut, setNotification } = this.props
    logOut();
    setNotification("You have been logged out", "success", true)
  }

  toggleDropDown = () => {
    const { showDropdown } = this.props.navBarState
    showDropdown ? this.hide() : this.show();
  }

  show = () => {
    this.props.showDropdown()
    document.addEventListener('click', this.toggleDropDown)
  }

  hide =() => {
    this.props.hideDropdown()
    document.removeEventListener('click', this.toggleDropDown)
  }

  renderDropDown = () => {
    const { loggedIn, permission } = this.props.userData
    const { showDropdown } = this .props.navBarState
    return showDropdown ? <DropDown loggedIn={loggedIn} permission={permission} logout={this.logout}/> : null;
  }

  render(){
    return(
      <React.Fragment>
        <div className="navbar">
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link menu" onClick={this.toggleDropDown} to="#">Menu</Link>
        </div>
        {this.renderDropDown()}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    navBarState: state.navBarState
  }
}

export default connect(mapStateToProps, { showDropdown, hideDropdown, logOut, setNotification })(NavBar);
