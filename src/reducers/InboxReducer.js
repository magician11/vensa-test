import { FETCH_MESSAGES } from '../actions/index';

const INITIAL_STATE = {
  messages: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
    return { ...state, messages: action.payload.data };
    default: return state;
  }
}
