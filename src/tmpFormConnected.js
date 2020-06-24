import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class  extends React.Component {

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

  onSubmit = ({  }) => {

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

  }
}

export const validate = (formValues) => {
  const {  } = formValues;
  const errors = {}

  if(!){
    errors. = "This field must not be left empty"
  }

  return errors

}

export default connect(mapStateToProps)(reduxForm({ form: '', validate: validate })());
