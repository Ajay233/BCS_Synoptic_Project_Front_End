import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createQuestion } from '../actions'

class NewQuestionForm extends React.Component {

  renderInput = (formProps) => {
    return(
      <div>
        {this.renderError(formProps.meta)}
        <label>{formProps.label}</label>
        <input {...formProps.input} className="input-standard"/>
      </div>
    );
  }

  renderError = (meta) => {
    const { error, touched } = meta
    return error && touched ? <div className="field notification error"><i className="fas fa-exclamation-circle"></i> {error}</div> : null
  }

  onSubmit = ({ questionNumber, description }) => {
    const { userData, createQuestion, currentQuiz } = this.props
    const data = {
      quizId: currentQuiz.id,
      questionNumber: questionNumber,
      description: description
    }
    createQuestion([data], userData.jwt)
  }

  render(){
    return(
      <div>
        <Link to="/quizView"><i className="fas fa-chevron-left"></i> Back</Link>
        <div className="title-large">Add a Question</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="questionNumber" component={this.renderInput} label="Enter a question number" />
          <Field name="description" component={this.renderInput} label="Enter a description for the question" />
          <button className="button button-standard">Save</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    currentQuiz: state.currentQuiz
  }
}

export const validate = (formValues) => {
  const { questionNumber, description } = formValues;
  const errors = {}

  if(!questionNumber){
    errors.questionNumber = "This field must not be left empty"
  } else if(isNaN(questionNumber)){
    errors.questionNumber = "Only numbers are valid for this field"
  }

  if(!description){
    errors.description = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps, { createQuestion })(reduxForm({ form: 'newQuestionForm', validate: validate })(NewQuestionForm));
