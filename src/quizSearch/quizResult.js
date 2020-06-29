import React from 'react'
import { Link } from 'react-router-dom'

const QuizResult = (props) => {

  const renderResult = () => {
    const { name } = props.quiz
    return(
      <div className="listRow">
        <div className="quizName">{name}</div>
        {renderOptions()}
      </div>
    );
  }

  const renderOptions = () => {
    return(
      <div className="quizOptions">
        {renderDeleteOption()}
        {renderEditOrView()}
      </div>
    );
  }

  const renderEditOrView = () => {
    const { permission } = props
    if(permission === "Edit"){
      return <div><Link to="/quizView" onClick={handleEdit} className="link"><i className="far fa-edit blue"></i> edit</Link></div>
    } else {
      return <div><Link to="/quizView" onClick={handleEdit} className="link"><i className="far fa-eye blue"></i> view</Link></div>
    }
  }

  const renderDeleteOption = () => {
    const { permission } = props
    if(permission === "Edit"){
      return(
        <div>
          <Link to="#" onClick={handleDelete} className="link">
            <i className="fas fa-trash-alt red"></i> delete
          </Link>
        </div>
      );
    }
  }

  const handleEdit = () => {
    const {jwt, getQuestions, setCurrentQuiz, quiz} = props;
    const param = {quizId: quiz.id}
    getQuestions(param, jwt)
    setCurrentQuiz(quiz)
  }

  const handleDelete = () => {
    const {quiz, setCurrentQuiz, showModalOne} = props;
    setCurrentQuiz(quiz)
    showModalOne()
  }

  return(
    <React.Fragment>
      {renderResult()}
    </React.Fragment>
  );

}

export default QuizResult;
