import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import playerInfoReducer from './playerInfoReducer'


const rootReducer = combineReducers({
  players: playerReducer,
  selectedPlayer: playerInfoReducer
})


export default rootReducer;
