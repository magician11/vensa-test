import fetch from 'isomorphic-fetch';

export const FETCHING_MESSAGES = 'FETCHING_MESSAGES';
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';
export const FETCHING_MESSAGE = 'FETCHING_MESSAGE';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';
export const SORT_MESSAGES = 'SORT_MESSAGES';

export function fetchMessages() {
  const VENSA_MESSAGE_ENDPOINT = 'http://vensawebtest.azurewebsites.net/message/10000';
  return (dispatch) => {
    dispatch({ type: FETCHING_MESSAGES });

    return fetch(VENSA_MESSAGE_ENDPOINT)
    .then(response => response.json())
    .then((messages) => {
      dispatch({
        type: RECEIVED_MESSAGES,
        payload: messages
      });
    });
  };
}

export function sortMessages(sortKey) {
  return {
    type: SORT_MESSAGES,
    payload: sortKey
  };
}

export function fetchMessage(messageId) {
  const VENSA_MESSAGE_ENDPOINT = `http://vensawebtest.azurewebsites.net/message/${messageId}`;
  return (dispatch) => {
    dispatch({ type: FETCHING_MESSAGE });

    return fetch(VENSA_MESSAGE_ENDPOINT)
    .then(response => response.json())
    .then((message) => {
      dispatch({
        type: RECEIVED_MESSAGE,
        payload: message
      });
    });
  };
}
