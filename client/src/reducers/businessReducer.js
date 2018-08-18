import { FETCH_BUSINESS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_BUSINESS:
      return action.payload || false;
    default:
      return state;
  }
}
