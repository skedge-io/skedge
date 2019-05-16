// AccountFrom shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
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
          <a href="/">
            <img alt="sign-up logo" src="/signup-logo.png" />
          </a>
          <p align="center">A few details about you‍</p>
        </div>
        <div className="account-setup-form">
          <form onSubmit={this.props.handleSubmit(this.props.onAccountSubmit)}>
            {this.renderFields()}
            <Button
              text="Continue"
              large="true"
              intent={Intent.SUCCESS}
              type="submit"
            />
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
