import { FETCH_APPOINTMENTS, CHANGE_DEFAULT_VIEW } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return action.payload;
    case CHANGE_DEFAULT_VIEW:
      return {
        ...state,
        defaultView: action.payload
      }
    default:
      return state;
  }
}
