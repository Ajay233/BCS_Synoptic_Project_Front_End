import React from 'react'
import { connect } from 'react-redux'
import { timedAction } from '../utils/timed'
import { unsetNotification } from './actions'

class Notification extends React.Component {

  renderNotification = () => {
    const { show, message, type, timed } = this.props.notificationState
    const { unsetNotification } = this.props
    if(show){
      return(
        <div className={`notification ${type}`}>
          {timed ? timedAction(unsetNotification, 2000) : null}
          {message}
        </div>
      );
    } else {
      return null;
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.renderNotification()}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps, { unsetNotification })(Notification);
