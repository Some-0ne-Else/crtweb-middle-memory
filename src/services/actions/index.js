export const SELECT_CARD = 'SELECT_CARD';
export const CHECK_MATCH = 'CHECK_MATCH';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const ACTIVATE_CARD = 'ACTIVATE_CARD';
export const RESET_ACTIVE_STATE = 'RESET_ACTIVE_STATE';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const TOGGLE_GAME_STATUS = 'TOGGLE_GAME_STATUS';
export const SET_USERNAME = 'SET_USERNAME';
export const TOGGLE_SHOW_RESULTS = 'TOGGLE_SHOW_RESULTS';

export const selectCard = ({ id, type }) => ({
  type: SELECT_CARD,
  payload: { id, type },
});

export const checkMatch = () => ({
  type: CHECK_MATCH,
});

export const clearSelection = () => ({
  type: CLEAR_SELECTION,
});

export const activateCard = ({ id }) => ({
  type: ACTIVATE_CARD,
  payload: { id },
});

export const resetActiveState = () => ({
  type: RESET_ACTIVE_STATE,
});

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const toggleGameStatus = () => ({
  type: TOGGLE_GAME_STATUS,
});

export const setUsername = ({ userName }) => ({
  type: SET_USERNAME,
  payload: { userName },
});

export const toggleShowResults = () => ({
  type: TOGGLE_SHOW_RESULTS,
});
