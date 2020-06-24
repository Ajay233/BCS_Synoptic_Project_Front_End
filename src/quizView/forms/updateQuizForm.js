import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { updateQuiz } from '../actions'

class UpdateQuiForm extends React.Component {

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
    const { userData, updateQuiz, currentQuiz } = this.props
    cons data = {
      id: currentQuiz.id,
      name: name
    }
    updateQuiz(data, userData.jwt)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} label="Quiz name:" />
          <button className="button button-standard"></button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    initialState: {
      name: state.currentQuiz.name
    },
    userData: state.userData,
    currentQuiz: state.currentQuiz
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

export default connect(mapStateToProps, { updateQuiz })(reduxForm({ form: 'updateQuizForm', validate: validate })(UpdateQuiForm));
