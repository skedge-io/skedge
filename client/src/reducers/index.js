import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import businessReducer from './businessReducer';
import monthlyReducer from './monthlyReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  apps: appointmentReducer,
  business: businessReducer,
  monthly: monthlyReducer,
  employee: employeeReducer
});
