import React from 'react'
import  { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Notification from '../notification/notification'
import Modal from '../modal/modal'
import UpdateQuestionForm from './forms/updateQuestionForm'
import Answers from '../answers/answers'

import { setNotification } from '../notification/actions'
import { showModalOne, showModalTwo, hideModal } from '../modal/actions'
import { setCurrentAnswer, deleteAnswer } from '../answers/actions'
import { clearCurrentQuestion, deleteQuestion } from './actions'

import { del } from '../axiosRequests/requests'
import history from '../history'


class QuestionView extends React.Component {

  renderModal = () => {
    const { modalState, hideModal } = this.props
    if(modalState.showModalOne){
      return(
        <Modal
          show={modalState.showModalOne}
          title={"Delete Question"}
          message={"You are about to delete a question which will delete any answers associated with it.  Do you want to continue?"}
          onContinue={this.handleQuestionDelete}
          onClose={hideModal}
        />
      );
    } else if(modalState.showModalTwo) {
      return(
        <Modal
          show={modalState.showModalTwo}
          title={"Delete Answer"}
          message={"You are about to delete an answer.  Do you want to continue?"}
          onContinue={this.handleAnswerDelete}
          onClose={hideModal}
        />
      );
    } else {
      return null;
    }
  }

  renderAnswers = () => {
    const { answerList, userData, setCurrentAnswer, showModalTwo } = this.props;
    if(answerList.length > 0){
      return(
        <div>
        {this.renderAnswerHeading()}
        {this.renderAnswerHeaders()}
        <Answers
          answers={answerList}
          jwt={userData.jwt}
          permission={userData.permission}
          setCurrentAnswer={setCurrentAnswer}
          showModalTwo={showModalTwo}
        />
        </div>
      );
    } else {
      return(
        <div>
          There are currently no answers associated with this question
        </div>
      );
    }
  }

  renderAnswerHeading = () => {
    return(
      <div className="title-medium">
        Answers
      </div>
    );
  }

  renderAnswerHeaders = () => {
    return(
      <div className="listHeaderRow">
        <div>Answer</div>
        <div>Description</div>
      </div>
    );
  }

  handleQuestionDelete = () => {
    const { userData, currentQuestion, hideModal, setNotification, deleteQuestion } = this.props
    const config = { data: [currentQuestion] }
    del('question/delete', config, userData.jwt).then((response) => {
      deleteQuestion(currentQuestion)
      hideModal()
      setNotification("Question deleted", "success", true)
      history.push("/quizView")
    }).catch((error) => {
      if(error.status === 403){
        setNotification("Session expired - please log back in to continue", "warning", true)
      } else{
        setNotification(error.response.data, "error", true)
      }
    })
  }

  handleAnswerDelete = () => {
    const { userData, currentAnswer, hideModal, setNotification, deleteAnswer } = this.props
    const config = { data: [currentAnswer] }
    del('answer/delete', config, userData.jwt).then((response) => {
      deleteAnswer(currentAnswer)
      hideModal()
      setNotification("Answer deleted", "success", true)
    }).catch((error) => {
      if(error.status === 403){
        setNotification("Session expired - please log back in to continue", "warning", true)
      } else{
        setNotification(error.response.data, "error", true)
      }
    })
  }

  renderFormOrDetails = () => {
    const { permission } = this.props.userData
    return permission === "Edit" ? <UpdateQuestionForm /> : this.renderDetailsOnly()
  }

  renderDetailsOnly = () => {
    const { questionNumber, description } = this.props.currentQuestion
    return(
      <div>
        <div>{`Question number: ${questionNumber}`}</div>
        <div>{`Description: ${description}`}</div>
      </div>
    );
  }

  addAnswer = () => {
    return(
      <Link to="/newAnswer">
        <i className="fas fa-plus-circle"></i> Add an answer
      </Link>
    );
  }

  renderAddAnswer = () => {
    const { permission } = this.props.userData
    return permission === "Edit" ? this.addAnswer() : null;
  }

  render(){
    return(
      <div>
        <Notification />
        {this.renderModal()}
        <Link to="/quizView"><i className="fas fa-chevron-left"></i> Back</Link>
        <div className="title-large">Question details</div>
        {this.renderFormOrDetails()}
        {this.renderAddAnswer()}
        {this.renderAnswers()}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    modalState: state.modalState,
    currentQuestion: state.currentQuestion,
    answerList: state.answerList,
    currentAnswer: state.currentAnswer
  }
}

export default connect(mapStateToProps,
  {
    showModalOne,
    showModalTwo,
    hideModal,
    setNotification,
    setCurrentAnswer,
    deleteAnswer,
    clearCurrentQuestion,
    deleteQuestion
  })(QuestionView);
