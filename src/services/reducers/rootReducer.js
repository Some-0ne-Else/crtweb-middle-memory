/* eslint-disable no-param-reassign */
import { generateCards, generateTypes } from '../../utils/utils';
import {
  SELECT_CARD,
  CHECK_MATCH,
  CLEAR_SELECTION,
  DISABLE_OTHER_CARDS,
  RESET_CARD_STATUS,
  INCREASE_COUNTER,
  SET_USERNAME,
  NEXT_GAME_STEP,
  PLAY_AGAIN,
} from '../actions';

const initialState = {
  cards: generateCards(generateTypes()),
  counter: {
    value: 0,
  },
  selectedCards: [],
  userName: 'DefaultUser',
  gameStep: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD: {
      // dont allow select same card twice and not put more then two cards
      if (state.selectedCards.findIndex((el) => el.id === action.payload.id) === -1) {
        const immutableCards = [...state.selectedCards];
        immutableCards.push(action.payload);
        return {
          ...state,
          cards: state.cards.map((card) => {
            if (card.id === action.payload.id) { card.active = true; return card; }
            return card;
          }),
          selectedCards: immutableCards,
        };
      }
      return { ...state };
    }
    case CHECK_MATCH: {
      if (state.selectedCards.length === 2
        && state.selectedCards[0].type === state.selectedCards[1].type) {
        return {
          ...state,
          cards: state.cards.map(
            (card) => {
              if (card.id === state.selectedCards[0].id
             || card.id === state.selectedCards[1].id) { card.finded = true; } return card;
            },
          ),
        };
      }
      return { ...state };
    }
    case CLEAR_SELECTION: {
      return { ...state, selectedCards: [] };
    }

    case DISABLE_OTHER_CARDS: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (!card.active) { card.disabled = true; } return card;
        }),
      };
    }
    case RESET_CARD_STATUS: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          card.active = false; card.disabled = false; return card;
        }),
      };
    }
    case INCREASE_COUNTER: {
      return { ...state, counter: { ...state.counter, value: state.counter.value + 1 } };
    }

    case SET_USERNAME: {
      return { ...state, userName: action.payload.userName };
    }
    case NEXT_GAME_STEP: {
      if (state.gameStep <= 3) {
        return {
          ...state,
          gameStep: state.gameStep + 1,
        };
      }
      return { ...state };
    }
    case PLAY_AGAIN: {
      return {
        ...state,
        counter: { value: 0 },
        gameStep: 2,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
