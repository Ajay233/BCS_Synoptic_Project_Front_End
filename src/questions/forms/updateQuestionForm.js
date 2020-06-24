import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { showModalOne } from "../../modal/actions"
import { updateQuestion } from '../actions'

class UpdateQuestionForm extends React.Component {

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
    const { updateQuestion, userData, currentQuestion } = this.props
    const data = {
      id: currentQuestion.id,
      quizId: currentQuestion.quizId,
      questionNumber: questionNumber,
      description: description
    }
    updateQuestion([data], userData.jwt)
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.showModalOne()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="questionNumber" component={this.renderInput} label="Question number:" />
        <Field name="description" component={this.renderInput} label="Description:" />
        <button className="button button-standard">Save changes</button>
        <button className="button button-danger" onClick={this.handleDelete}>Delete Question</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    initialValues:{
      questionNumber: state.currentQuestion.questionNumber,
      description: state.currentQuestion.description
    },
    userData: state.userData,
    currentQuestion: state.currentQuestion
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

export default connect(mapStateToProps,
  {
    showModalOne,
    updateQuestion
  })(reduxForm({ form: 'updateQuestionForm', validate: validate })(UpdateQuestionForm));
