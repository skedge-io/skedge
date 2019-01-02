import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import businessReducer from './businessReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  apps: appointmentReducer,
  business: businessReducer
});
