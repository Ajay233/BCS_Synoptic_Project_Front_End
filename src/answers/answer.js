import React from 'react'
import { Link } from 'react-router-dom'

const Answer = (props) => {

  const renderAnswer = () => {
    const { answerIndex, description } = props.answer
    return(
      <div>
        <div>{answerIndex}</div>
        <div>{description}</div>
        {renderOptions()}
      </div>
    );
  }

  const renderOptions = () => {
    const { permission } = props
    if(permission === "Edit" ){
      return(
        <div>
          <div><Link to="/editAnswer" onClick={handleEdit}><i className="far fa-edit"></i> edit</Link></div>
          <div><Link to="#" onClick={handleDelete}><i className="fas fa-trash-alt"></i> delete</Link></div>
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
