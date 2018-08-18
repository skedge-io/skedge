// AccountFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { Link } from 'react-router-dom';
import '../../styles.css';


const AccountFormReview = ({ onCancel, formValues, submitAccount, history }) => {
  const reviewFields = _.map(formFields, ({ name, label, type, value, checked }) => {
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
        <Link to="/dashboard"><button onClick={() => submitAccount(formValues, history)} className="green white-text btn-flat right waves-effect waves-light">
          Finish Registration
          <i className="material-icons right">contact_mail</i>
        </button></Link>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.accountForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(AccountFormReview));
