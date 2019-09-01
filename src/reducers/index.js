import { combineReducers } from 'redux';
import playerListReducer from './playersReducer';

const rootReducer = combineReducers({
  players: playerListReducer
});

export default rootReducer;
