import { FETCHING_MESSAGES, RECEIVED_MESSAGES, FETCHING_MESSAGE, RECEIVED_MESSAGE, SORT_MESSAGES, UPDATE_FILTER } from '../actions/index';

const INITIAL_STATE = {
  messages: [],
  isFetchingMessages: false,
  isFetchingMessage: false,
  sortKey: '',
  activeMessage: null,
  activeRowIndex: null,
  filterString: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_MESSAGES:
    return { ...state, isFetchingMessages: true };
    case RECEIVED_MESSAGES:
    return { ...state, isFetchingMessages: false, messages: action.payload };
    case FETCHING_MESSAGE:
    return { ...state, isFetchingMessage: true, activeRowIndex: action.payload };
    case RECEIVED_MESSAGE:
    return { ...state, isFetchingMessage: false, activeMessage: action.payload };
    case SORT_MESSAGES:
    return { ...state, sortKey: action.payload.sortKey, messages: action.payload.sortedMessages, activeRowIndex: null };
    case UPDATE_FILTER:
    return { ...state, filterString: action.payload, activeRowIndex: null, activeMessage: null };
    default: return state;
  }
}
