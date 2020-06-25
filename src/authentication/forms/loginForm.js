import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginForm extends React.Component {

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

  onSubmit = ({ username, password }) => {
    const { login } = this.props;
    const data = {
      username: username,
      password: password
    }
    login(data);
  }

  render(){
    return(
      <div>
        <div className="title-large">Login</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="username" component={this.renderInput} label="Username:" />
          <Field name="password" component={this.renderInput} label="Password:" />
          <button className="button button-standard">Login</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export const validate = (formValues) => {
  const { username, password } = formValues;
  const errors = {}

  if(!username){
    errors.username = "This field must not be left empty"
  }

  if(!password){
    errors.password = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps, { login })(reduxForm({ form: 'loginForm', validate: validate })(LoginForm));
