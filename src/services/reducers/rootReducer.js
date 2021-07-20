/* eslint-disable no-param-reassign */
import { generateCards, generateTypes } from '../../utils/utils';
import {
  SELECT_CARD,
  CHECK_MATCH,
  CLEAR_SELECTION,
  ACTIVATE_CARD,
  RESET_ACTIVE_STATE,
  INCREASE_COUNTER,
  TOGGLE_GAME_STATUS,
  SET_USERNAME,
  TOGGLE_SHOW_RESULTS,
} from '../actions';

const initialState = {
  cards: generateCards(generateTypes()),
  counter: {
    value: 0,
  },
  selectedCards: [],
  gameStarted: false,
  userName: 'DefaultUser',
  showResults: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD: {
      // dont allow select same card twice
      if (state.selectedCards.findIndex((el) => el.id === action.payload.id) === -1) {
        const immutableCards = [...state.selectedCards];
        immutableCards.push(action.payload);
        return { ...state, selectedCards: immutableCards };
      }
      return { ...state };
    }
    case CHECK_MATCH: {
      if (state.selectedCards[0].type === state.selectedCards[1].type) {
        return {
          ...state,
          cards: state.cards.filter(
            (card) => card.id !== state.selectedCards[0].id
             && card.id !== state.selectedCards[1].id,
          ),
        };
      }
      return { ...state };
    }
    case CLEAR_SELECTION: {
      return { ...state, selectedCards: [] };
    }

    case ACTIVATE_CARD: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) { card.active = true; return card; }
          return card;
        }),
      };
    }
    case RESET_ACTIVE_STATE: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.active) { card.active = false; return card; } return card;
        }),
      };
    }
    case INCREASE_COUNTER: {
      return { ...state, counter: { ...state.counter, value: state.counter.value + 1 } };
    }
    case TOGGLE_GAME_STATUS: {
      return { ...state, gameStarted: !state.gameStarted };
    }
    case SET_USERNAME: {
      return { ...state, userName: action.payload.userName };
    }
    case TOGGLE_SHOW_RESULTS: {
      return { ...state, showResults: true };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
