import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages() {
  const VENSA_MESSAGE_ENDPOINT = 'http://vensawebtest.azurewebsites.net/message';

  return {
    type: FETCH_MESSAGES,
    payload: axios.get(VENSA_MESSAGE_ENDPOINT)
  };
}
