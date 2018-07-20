// AppointmentFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import './../styles.css';
import { Link } from 'react-router-dom';


const AppointmentFormReview = ({ onCancel, formValues, submitAppointment, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
        <hr />
        <button className="yellow darken-3 white-text btn-flat hoverable waves-effect waves-light" onClick={onCancel}>
          Back
        </button>
        <button onClick={() => submitAppointment(formValues, history)} className="green white-text btn-flat right waves-effect waves-light">
          Create Appointment
          <i className="material-icons right">event_available</i>
        </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.appointmentForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(AppointmentFormReview));
