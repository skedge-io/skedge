// AccountFrom shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import AccountField from "./AccountField";
import validateNumbers from "../../utils/validateNumbers";
import formFields from "./formFields.js";
import { Button, Intent } from "@blueprintjs/core";

class AccountForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={AccountField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="account-setup-col">
        <div className="row">
          <img className="logo" src="/skedge.png" />
          <h2 align="center">Finish setting up your account</h2>
        </div>
        <div className="account-setup-form">
          <form onSubmit={this.props.handleSubmit(this.props.onAccountSubmit)}>
            {this.renderFields()}
            <Link
              to="/dashboard"
              className="red btn-flat white-text hoverable waves-effect waves-light"
            >
              Cancel
            </Link>
            <Button text="Cancel" intent={Intent.DANGER} />
            <button
              className="teal btn-flat right white-text hoverable waves-effect waves-light"
              waves="light"
              type="submit"
            >
              Next <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.phone = validateNumbers(values.phone || "");

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "accountForm",
  destroyOnUnmount: false
})(AccountForm);
