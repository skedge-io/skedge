// AppointmentForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AppointmentField from './AppointmentField';
import validateNumbers from '../../utils/validateNumbers';
import formFields from './formFields.js';
import { Row, Input } from 'react-materialize'


class AppointmentForm extends Component {





  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={AppointmentField} type="text" label={label} name={name} />
    })
  }

  render() {



    return (
      <div>
        <h4 align="center">Schedule New Appointment</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onAppointmentSubmit)}>
          {this.renderFields()}

            <label className="left">Date</label>
            <Input className="full" placeholder="Select a date" className="datepicker" name='date' type='date' onChange={function(e, value) {}} />


            <label className="left">Time</label>
            <Input className="full" placeholder="Select a time" name='time' type='time' onChange={function(e, value) {}} />

          <Link to="/dashboard" className="red btn-flat white-text hoverable waves-effect waves-light">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text hoverable waves-effect waves-light" waves='light' type="submit">Next <i className="material-icons right">done</i></button>
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
