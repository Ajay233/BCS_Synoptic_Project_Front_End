import React from 'react'
import Answer from './answer'

const Answers = (props) => {

  const renderResults = () => {
    const { answers, permission, setCurrentAnswer, showModalTwo } = props
    let listOfQuestions = answers.map(answer => {
      return(
        <Answer
          key={answers.indexOf(answer)}
          answer={answer}
          permission={permission}
          setCurrentAnswer={setCurrentAnswer}
          showModalTwo={showModalTwo}
        />
      );
    })
    return listOfQuestions
  }

  return(
    <React.Fragment>
      {renderResults()}
    </React.Fragment>
  );
}

export default Answers;
