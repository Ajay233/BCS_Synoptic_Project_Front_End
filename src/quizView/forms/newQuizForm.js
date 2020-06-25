import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createQuiz } from '../actions'

class NewQuizForm extends React.Component {

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

  onSubmit = ({ name }) => {
    const { userData, createQuiz } = this.props
    const data = {
      name: name
    }
    createQuiz(data, userData.jwt)
  }


  render(){
    return(
      <div>
        <div className="title-large">Create a quiz</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} label="Quiz name:" />
          <button className="button button-standard">Save changes</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

export const validate = (formValues) => {
  const { name } = formValues;
  const errors = {}

  if(!name){
    errors.name = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps, { createQuiz })(reduxForm({ form: 'newQuizForm', validate: validate })(NewQuizForm));
