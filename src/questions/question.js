import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {

  const renderQuestion = () => {
    const { questionNumber, description } = props.question
    return(
      <div className="listRow">
        <div className="questionNumber">{questionNumber}</div>
        <div className="questionDescription">{description}</div>
        {renderOptions()}
      </div>
    );
  }

  const renderOptions = () => {
    const { permission } = props
    if(permission !== "Restricted"){
      return(
        <div className="questionOptions">
          {renderEditOrView()}
          {renderDeleteOption()}
        </div>
      );
    } else {
      return null;
    }
  }

  const renderEditOrView = () => {
    const { permission } = props
    if(permission === "Edit"){
      return <div><Link to="/questionView" onClick={handleEditOrView} className="link"><i className="far fa-edit blue"></i> edit</Link></div>
    } else {
      return <div><Link to="/questionView" onClick={handleEditOrView} className="link"><i className="far fa-eye blue"></i> view</Link></div>
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
    } else {
      return null
    }
  }

  const handleEditOrView = () => {
    const {jwt, getAnswers, setCurrentQuestion, question} = props;
    const param = {questionId: question.id}
    getAnswers(param, jwt)
    setCurrentQuestion(question)
  }

  const handleDelete = () => {
    const {question, setCurrentQuestion, showModalTwo} = props;
    setCurrentQuestion(question)
    showModalTwo()
  }

  return(
    <React.Fragment>
      {renderQuestion()}
    </React.Fragment>
  );

}

export default Question;
