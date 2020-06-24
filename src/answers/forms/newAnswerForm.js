import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createAnswers } from '../actions'

class NewAnswerForm extends React.Component {

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

  onSubmit = ({ answerIndex, description }) => {
    const { createAnswers, userData, currentQuestion } = this.props
    const data = {
      questionId: currentQuestion.id,
      answerIndex: answerIndex,
      description: description
    }
    createAnswers([data], userData.jwt)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="" component={this.renderInput} label="" />
          <button className="button button-standard"></button>
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
  }

  if(!description){
    errors.description = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps, { createAnswers })(reduxForm({ form: 'newAnswerForm', validate: validate })(NewAnswerForm));
