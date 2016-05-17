import { FETCH_MESSAGES } from '../actions/index';

const INITIAL_STATE = {
  messages: []
};

export default function (state = INITIAL_STATE, action) {
  console.log('entering InboxReducer...');
  console.log('current action...', action);
  console.log('current state...', state);
  switch (action.type) {
    case FETCH_MESSAGES:
    console.log('messages retrieved...', action.payload.data);
    return { ...state, messages: action.payload.data };
    default: return state;
  }
}
