import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {

  const renderQuestion = () => {
    const { questionNumber, description } = props.question
    return(
      <div>
        <div>{questionNumber}</div>
        <div>{description}</div>
        {renderOptions()}
      </div>
    );
  }

  const renderOptions = () => {
    return(
      <div>
        {renderEditOrView()}
        <div><Link to="#" onClick={handleDelete}><i className="fas fa-trash-alt"></i> delete</Link></div>
      </div>
    );
  }

  const renderEditOrView = () => {
    const { permission } = props
    if(permission === "Edit"){
      return <div><Link to="/questionView" onClick={handleEdit}><i className="far fa-edit"></i> edit</Link></div>
    } else {
      return <div><Link to="/questionView" onClick={handleEdit}><i className="far fa-eye"></i> view</Link></div>
    }
  }

  const handleEdit = () => {
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
