import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getQuizzesByName } from '../actions'

class QuizSearchForm extends React.Component {

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

  onSubmit = ({ name }) => {
    const { getQuizzesByName, userData } = this.props
    const param = { name: name }
    getQuizzesByName(param, userData.jwt)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} label="Enter a Quiz name to search for:" />
          <button className="button button-standard"><i className="fas fa-search"></i> Search</button>
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

export default connect(mapStateToProps,
  {
    getQuizzesByName
  })(reduxForm({ form: 'quizSearchForm', validate: validate })(QuizSearchForm));
