import { FETCHING_MESSAGES, RECEIVED_MESSAGES, FETCHING_MESSAGE, RECEIVED_MESSAGE, SORT_MESSAGES } from '../actions/index';

const INITIAL_STATE = {
  messages: [],
  isFetchingMessages: false,
  isFetchingMessage: false,
  sortKey: 'SentDateTime',
  activeMessage: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_MESSAGES:
    return { ...state, isFetchingMessages: true };
    case RECEIVED_MESSAGES:
    return { ...state, isFetchingMessages: false, messages: action.payload };
    case FETCHING_MESSAGE:
    return { ...state, isFetchingMessage: true };
    case RECEIVED_MESSAGE:
    return { ...state, isFetchingMessage: false, activeMessage: action.payload };
    case SORT_MESSAGES:
    return { ...state, sortKey: action.payload };
    default: return state;
  }
}
