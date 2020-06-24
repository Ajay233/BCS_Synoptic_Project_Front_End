import React from 'react'
import { connect } from 'react-redux'
import { setNotification } from './notification/actions'
import { showModalOne, hideModal } from './modal/actions'
import Notification from './notification/notification'
import Modal from './modal/modal'

class Home extends React.Component {

  test = () => {
    this.props.showModalOne()
  }

  test2 =() => {
    console.log("Test func")
  }

  render(){
    return(
      <div>
        <Notification />
        <Modal
          show={this.props.modalState.showModalOne}
          title={"Test"}
          message={"Test"}
          onContinue={this.test2}
          onClose={this.props.hideModal}
        />
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
    notificationState: state.notificationState,
    modalState: state.modalState
  }
}

export default connect(mapStateToProps, { setNotification, showModalOne, hideModal })(Home);
