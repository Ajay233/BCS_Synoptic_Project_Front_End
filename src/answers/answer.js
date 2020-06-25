import React from 'react'
import { Link } from 'react-router-dom'

const Answer = (props) => {

  const renderAnswer = () => {
    const { answerIndex, description } = props.answer
    return(
      <div className="listRow">
        <div className="answerIndex">{answerIndex}</div>
        <div className="answerDescription">{description}</div>
        {renderOptions()}
      </div>
    );
  }

  const renderOptions = () => {
    const { permission } = props
    if(permission === "Edit" ){
      return(
        <div className="answerOptions">
          <div><Link to="/editAnswer" onClick={handleEdit} className="link"><i className="far fa-edit blue"></i> edit</Link></div>
          <div><Link to="#" onClick={handleDelete} className="link"><i className="fas fa-trash-alt red"></i> delete</Link></div>
        </div>
      );
    } else {
      return null
    }
  }

  const handleEdit = () => {
    const {setCurrentAnswer, answer} = props;
    setCurrentAnswer(answer)
  }

  const handleDelete = () => {
    const {answer, setCurrentAnswer, showModalTwo} = props;
    setCurrentAnswer(answer)
    showModalTwo()
  }

  return(
    <React.Fragment>
      {renderAnswer()}
    </React.Fragment>
  );

}

export default Answer;
