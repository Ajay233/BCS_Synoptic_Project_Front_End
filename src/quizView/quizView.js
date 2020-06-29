import React from 'react'
import  { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Notification from '../notification/notification'
import Modal from '../modal/modal'
import UpdateQuizForm from './forms/updateQuizForm'
import Questions from '../questions/questions'

import { setNotification } from '../notification/actions'
import { showModalOne, showModalTwo, hideModal } from '../modal/actions'
import { setCurrentQuestion, deleteQuestion } from '../questions/actions'
import { getAnswers } from '../answers/actions'
import { clearCurrentQuiz } from './actions'

import { del } from '../axiosRequests/requests'
import history from '../history'


class QuizView extends React.Component {

  renderModal = () => {
    const { modalState, hideModal } = this.props
    if(modalState.showModalOne){
      return(
        <Modal
          show={modalState.showModalOne}
          title={"Delete Quiz"}
          message={"You are about to delete a quiz which will delete any questions and answers associated with it.  Do you want to continue?"}
          onContinue={this.handleQuizDelete}
          onClose={hideModal}
        />
      );
    } else if(modalState.showModalTwo) {
      return(
        <Modal
          show={modalState.showModalTwo}
          title={"Delete Question"}
          message={"You are about to delete a question which will delete any answers associated with it.  Do you want to continue?"}
          onContinue={this.handleQuestionDelete}
          onClose={hideModal}
        />
      );
    } else {
      return null;
    }
  }

  renderQuestions = () => {
    const { questionList, userData, setCurrentQuestion, getAnswers, showModalTwo } = this.props;
    if(questionList.length > 0){
      return(
        <div>
        {this.renderQuestionHeading()}
        {this.renderQuestionHeaders()}
        <Questions
          questions={questionList}
          jwt={userData.jwt}
          permission={userData.permission}
          setCurrentQuestion={setCurrentQuestion}
          getAnswers={getAnswers}
          showModalTwo={showModalTwo}
        />
        </div>
      );
    } else {
      return(
        <div className="notification warning fit center">
          There are currently no questions associated with this quiz
        </div>
      );
    }
  }

  renderQuestionHeading = () => {
    return(
      <div className="title-medium">
        Questions
      </div>
    );
  }

  renderQuestionHeaders = () => {
    return(
      <div className="listHeaderRow">
        <div className="questionNumber">Question Number</div>
        <div className="questionDescription">Description</div>
      </div>
    );
  }

  handleQuizDelete = () => {
    const { userData, currentQuiz, hideModal, setNotification, clearCurrentQuiz } = this.props
    const config = { data: currentQuiz }
    del('quiz/delete', config, userData.jwt).then((response) => {
      clearCurrentQuiz()
      hideModal()
      setNotification("Quiz deleted", "success", true)
      history.push("/quizSearch")
    }).catch((error) => {
      if(error.status === 403){
        setNotification("Session expired - please log back in to continue", "warning", true)
      } else{
        setNotification(error.response.data, "error", true)
      }
    })

  }

  handleQuestionDelete = () => {
    const { userData, currentQuestion, hideModal, setNotification, deleteQuestion } = this.props
    const config = { data: [currentQuestion] }
    del('question/delete', config, userData.jwt).then((response) => {
      deleteQuestion(currentQuestion)
      hideModal()
      setNotification("Question deleted", "success", true)
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
    return permission === "Edit" ? <UpdateQuizForm /> : this.renderDetailsOnly();
  }

  renderDetailsOnly = () => {
    const { name } = this.props.currentQuiz
    return(
      <div>
        <div>{`Quiz Name: ${name}`}</div>
      </div>
    );
  }

  addQuestion = () => {
    return(
      <Link to="/newQuestion" className="addButton link">
        <i className="fas fa-plus-circle blue"></i> Add a question
      </Link>
    );
  }

  renderAddQuestion = () => {
    const { permission } = this.props.userData
    return permission === "Edit" ? this.addQuestion() : null;
  }

  render(){
    return(
      <div>
        <Notification />
        {this.renderModal()}
        <div className="title-large">Quiz details</div>
        {this.renderFormOrDetails()}
        {this.renderAddQuestion()}
        {this.renderQuestions()}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    modalState: state.modalState,
    currentQuiz: state.currentQuiz,
    questionList: state.questionList,
    currentQuestion: state.currentQuestion
  }
}

export default connect(mapStateToProps,
  {
    showModalOne,
    showModalTwo,
    hideModal,
    setNotification,
    setCurrentQuestion,
    getAnswers,
    clearCurrentQuiz,
    deleteQuestion
  })(QuizView);
