import React from 'react'
import { connect } from 'react-redux'
import QuizSearchForm from './forms/quizSearchForm'
import Notification from '../notification/notification'
import Modal from '../modal/modal'

import { setNotification } from '../notification/actions'
import { showModalOne, hideModal } from '../modal/actions'
import { deleteQuiz } from './actions'

import { del } from 'axiosRequests/requests'
import history from './history'

class QuizSearch extends React.Component {

  // renderResults = () => {
  //   const { quizResults } = this.props
  //   if(quizResults.length > 0){
  //     {this.renderResultHeading()}
  //     {this.renderResultHeaders()}
  //
  //   } else {
  //     return null;
  //   }
  // }

  renderResultHeading = () => {
    const { quizResults } = this.props
    return(
      <div className="title-medium">
        {`${quizResults.length} ${quizResults.length > 1 "Results" : "Result"}`}
      </div>
    );
  }

  renderResultHeaders = () => {
    return(
      <div className="listHeaderRow">
        <div>Quiz Name</div>
      </div>
    );
  }

  handleDelete = () => {
    const { userData, deleteQuiz, setNotification, hideModal, currentQuiz } = this.props;
    const config = { data: currentQuiz }
    del('quiz/delete', config, jwt).then((response) => {
      deleteQuiz(currentQuiz)
      setNotification("Quiz deleted", "success", true)
      hideModal()
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }


  render(){
    const { modalState, hideModal } = this.props
    return(
      <div>
      <Notification />
      <Modal
        show={modalState.showModalOne}
        title={"Delete Quiz"}
        message={"You are about to delete a quiz which will delete any questions and answers associated with it.  Do you want to continue?"}
        onContinue={this.handleDelete}
        onClose={hideModal}
      />
      <div>
        
      </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    modalState: state.modalState,
    quizResults: state.quizResults
  }
}

export default connect(mapStateToProps,
  {
    setNotification,
    showModalOne,
    hideModal,
    deleteQuiz
  })(QuizSearch);
