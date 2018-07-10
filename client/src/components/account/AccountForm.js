// AccountFrom shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AccountField from './AccountField';
import formFields from './formFields.js';

class AccountForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={AccountField} type="text" label={label} name={name} />
    })
  }

  render() {
    return (
      <div>
        <h2 align="center">Finish setting up your account</h2>
        <form onSubmit={this.props.handleSubmit(this.props.onAccountSubmit)}>
          {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">Next <i className="material-icons right">done</i></button>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'accountForm',
  destroyOnUnmount: false
})(AccountForm);
