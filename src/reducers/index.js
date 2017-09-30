import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import playerInfoReducer from './playerInfoReducer'
import leagueReducer from './leagueReducer'


const rootReducer = combineReducers({
  players: playerReducer,
  selectedPlayer: playerInfoReducer,
  leagues: leagueReducer
})


export default rootReducer;
