import React from 'react'
import { connect } from 'react-redux'
import { setNotification } from './notification/actions'
import Notification from './notification/notification'


class Home extends React.Component {

  test = () => {
    this.props.setNotification("Test message", "success", true)
  }

  render(){
    return(
      <div>
        <Notification />
        Home
        <button className="button button-standard" onClick={this.test}>
        test
        </button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps, { setNotification })(Home);
