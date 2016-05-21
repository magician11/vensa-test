import fetch from 'isomorphic-fetch';

export const FETCHING_MESSAGES = 'FETCHING_MESSAGES';
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';
export const SORT_MESSAGES = 'SORT_MESSAGES';
export const MESSAGE_SELECTED = 'MESSAGE_SELECTED';

export function fetchMessages() {
  const VENSA_MESSAGE_ENDPOINT = 'http://vensawebtest.azurewebsites.net/message';
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

export function selectMessage(messageId) {
  return {
    type: MESSAGE_SELECTED,
    payload: messageId
  };
}
