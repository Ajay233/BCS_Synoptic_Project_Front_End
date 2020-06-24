import React from 'react'
import QuizResult from './quizResult'

const QuizResults = (props) => {

  const renderResults = () => {
    const { quizzes, jwt, permission, setCurrentQuiz, getQuestions, showModalOne } = props
    let listOfQuizzes = quizzes.map(quiz => {
      return(
        <QuizResult
          key={quizzes.indexOf(quiz)}
          quiz={quiz}
          jwt={jwt}
          permission={permission}
          setCurrentQuiz={setCurrentQuiz}
          getQuestions={getQuestions}
          showModalOne={showModalOne}
        />
      );
    })
    return listOfQuizzes
  }

  return(
    <React.Fragment>
      {renderResults()}
    </React.Fragment>
  );
}

export default QuizResults;
