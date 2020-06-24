import React from 'react'
import Question from './question'

const Questions = (props) => {

  const renderResults = () => {
    const { questions, jwt, permission, setCurrentQuestion, getAnswers, showModalTwo } = props
    let listOfQuestions = questions.map(question => {
      return(
        <Question
          key={questions.indexOf(question)}
          question={question}
          jwt={jwt}
          permission={permission}
          setCurrentQuestion={setCurrentQuestion}
          getAnswers={getAnswers}
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

export default Questions;
