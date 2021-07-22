export const SELECT_CARD = 'SELECT_CARD';
export const CHECK_MATCH = 'CHECK_MATCH';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const DISABLE_OTHER_CARDS = 'DISABLE_OTHER_CARDS';
export const RESET_CARD_STATUS = 'RESET_CARD_STATUS';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const SET_USERNAME = 'SET_USERNAME';
export const NEXT_GAME_STEP = 'NEXT_GAME_STEP';
export const PLAY_AGAIN = 'PLAY_AGAIN';

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

export const disableOtherCards = () => ({
  type: DISABLE_OTHER_CARDS,
});
export const resetCardStatus = () => ({
  type: RESET_CARD_STATUS,
});

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const setUsername = ({ userName }) => ({
  type: SET_USERNAME,
  payload: { userName },
});
export const nextGameStep = () => ({
  type: NEXT_GAME_STEP,
});

export const playAgain = () => ({
  type: PLAY_AGAIN,
});
