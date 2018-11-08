// AppointmentNew shows AppointmentForm and AppointmentFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import AppointmentForm from "./AppointmentForm";
import AppointmentFormReview from "./AppointmentFormReview";

import TopBar from "../dashboard/TopBar";
import LeftPanel from "../dashboard/LeftPanel";

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

    return (
      <AppointmentForm
        onAppointmentSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div className="row-this higher">
        <LeftPanel wambo="active-sec" />
        <div className="container formFlex">
          <TopBar header="New Appointment" />
          <div className="inside">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "appointmentForm"
})(AppointmentNew);
