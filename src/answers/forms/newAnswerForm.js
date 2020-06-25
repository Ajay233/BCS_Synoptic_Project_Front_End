import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createAnswers } from '../actions'

class NewAnswerForm extends React.Component {

  renderInput = (formProps) => {
    return(
      <div>
        {this.renderError(formProps.meta)}
        <label>{formProps.label}</label>
        <input {...formProps.input} className="input-standard full"/>
      </div>
    );
  }

  renderError = (meta) => {
    const { error, touched } = meta
    return error && touched ? <div className="field notification error"><i className="fas fa-exclamation-circle"></i> {error}</div> : null
  }

  onSubmit = ({ answerIndex, description }) => {
    const { createAnswers, userData, currentQuestion } = this.props
    const data = {
      questionId: currentQuestion.id,
      answerIndex: answerIndex.toUpperCase(),
      description: description
    }
    createAnswers([data], userData.jwt)
  }

  render(){
    return(
      <div>
        <Link to="/questionView"><i className="fas fa-chevron-left"></i> Back</Link>
        <div className="title-large">Create an Answer</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="answerIndex" component={this.renderInput} label="Enter an answer index" />
          <Field name="description" component={this.renderInput} label="Enter a description:" />
          <button className="button button-standard">Save</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    currentQuestion: state.currentQuestion
  }
}

export const validate = (formValues) => {
  const { answerIndex, description } = formValues;
  const errors = {}

  if(!answerIndex){
    errors.answerIndex = "This field must not be left empty"
  } else if(!isNaN(answerIndex)){
    errors.answerIndex = "This should be a single letter e.g. A, B, C, D or E"
  } else if(answerIndex.length > 1){
    errors.answerIndex = "This should be a single letter e.g. A, B, C, D or E"
  }

  if(!description){
    errors.description = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps, { createAnswers })(reduxForm({ form: 'newAnswerForm', validate: validate })(NewAnswerForm));
