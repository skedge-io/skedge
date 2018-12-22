// AccountFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import "./../styles.scss";
import { Button, Intent } from "@blueprintjs/core";

const AccountFormReview = ({
  onCancel,
  formValues,
  submitAccount,
  history
}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div className="result-label">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="account-setup-col">
      <div className="row">
        <a href="/">
          <img src="/signup-logo.png" alt="skedge sign-up" />
        </a>
        <p align="center">Everything looks good? 👍‍</p>
      </div>
      <div className="account-setup-form results">
        <Button
          className="back-button"
          icon="chevron-left"
          iconOnly="true"
          minimal="true"
          onClick={onCancel}
        />
        <div className="result-labels-container">{reviewFields}</div>
        <Button
          text="Finish"
          large="true"
          intent={Intent.SUCCESS}
          type="submit"
          onClick={() => submitAccount(formValues, history)}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.accountForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(AccountFormReview));
