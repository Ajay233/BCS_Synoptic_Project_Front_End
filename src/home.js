import React from 'react'
import { connect } from 'react-redux'
import Notification from './notification/notification'


class Home extends React.Component {

  render(){
    return(
      <div>
        <Notification />
        <div className="title-large">WebbiSkools Ltd</div>
        <div className="title-medium-centered">Welcome to the Quiz Manager</div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState,
    modalState: state.modalState
  }
}

export default connect(mapStateToProps)(Home);
