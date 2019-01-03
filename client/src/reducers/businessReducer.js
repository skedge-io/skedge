import { FETCH_BUSINESS } from '../actions/types';

const defaultState = {
"business": {
  "employees": [],
  "clients": [],
  "_id": "",
  "campaigns": [],
  "name": "",
  "admin": ""
},
"clients": []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_BUSINESS:
      return action.payload;
    default:
      return state;
  }
}
