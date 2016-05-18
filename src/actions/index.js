import fetch from 'isomorphic-fetch';

export const FETCHING_MESSAGES = 'FETCHING_MESSAGES';
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';

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
