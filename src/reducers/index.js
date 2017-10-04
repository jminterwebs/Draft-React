import { combineReducers } from 'redux'
import leagueReducer from './leagueReducer'
import playerInfoReducer from './playerInfoReducer'
import leaguesReducer from './leaguesReducer'


const rootReducer = combineReducers({
  league: leagueReducer,
  selectedPlayer: playerInfoReducer,
  leagues: leaguesReducer
})


export default rootReducer;
