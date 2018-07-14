// AppointmentForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AppointmentField from './AppointmentField';
import validateNumbers from '../../utils/validateNumbers';
import formFields from './formFields.js';
import { Input } from 'react-materialize'


class AppointmentForm extends Component {





  renderFields() {
    return _.map(formFields, ({ label, text, name, type, onChange, }) => {
      return <Field key={name} defaultValue={text} onChange={onChange} type={type} component={AppointmentField} label={label} name={name} />
    })
  }

  render() {



    return (
      <div>
        <h4 align="center">Schedule New Appointment</h4>
        <form style={{ marginBottom: '10px' }} onSubmit={this.props.handleSubmit(this.props.onAppointmentSubmit)}>
          {this.renderFields()}

          <Link to="/dashboard" className="red btn-flat white-text hoverable waves-effect waves-light">
            Cancel
          </Link>
          <button className="blue btn-flat right white-text hoverable waves-effect waves-light" waves='light' type="submit">Next <i className="material-icons right">done</i></button>
        </form>
      </div>
    );


  }


}


function validate(values) {
  const errors = {};

  errors.phone = validateNumbers(values.phone || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'appointmentForm',
  destroyOnUnmount: false
})(AppointmentForm);
