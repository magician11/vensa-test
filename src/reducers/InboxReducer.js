import { FETCHING_MESSAGES, RECEIVED_MESSAGES, SORT_MESSAGES, MESSAGE_SELECTED } from '../actions/index';

const INITIAL_STATE = {
  messages: [],
  isFetching: false,
  sortKey: 'SentDateTime',
  activeMessage: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_MESSAGES:
    return { ...state, isFetching: true };
    case RECEIVED_MESSAGES:
    return { ...state, isFetching: false, messages: action.payload };
    case MESSAGE_SELECTED:
    return { ...state, activeMessage: action.payload };
    case SORT_MESSAGES:
    return { ...state, sortKey: action.payload };
    default: return state;
  }
}
