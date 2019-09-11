import { combineReducers } from 'redux';
import playerListReducer from './playersReducer';
import selectedPlayerReducer from './playerReducer';

const rootReducer = combineReducers({
  players: playerListReducer,
  selectedPlayer: selectedPlayerReducer
});

export default rootReducer;
