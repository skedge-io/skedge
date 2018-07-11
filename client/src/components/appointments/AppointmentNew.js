// AppointmentNew shows AppointmentForm and AppointmentFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AppointmentForm from './AppointmentForm';
import AppointmentFormReview from './AppointmentFormReview';

class AppointmentNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <AppointmentFormReview
        onCancel={() => this.setState({ showFormReview: false })}
       />
     );
  }

    return <AppointmentForm onAppointmentSubmit={() => this.setState({ showFormReview: true })}/>;
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'appointmentForm'
})(AppointmentNew);
