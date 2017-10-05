import { combineReducers } from 'redux'
import leagueReducer from './leagueReducer'
import playerInfoReducer from './playerInfoReducer'
import leaguesReducer from './leaguesReducer'
import teamsInfoReducer from './teamsInfoReducer'


const rootReducer = combineReducers({
  league: leagueReducer,
  selectedPlayer: playerInfoReducer,
  leagues: leaguesReducer,
  team: teamsInfoReducer
})


export default rootReducer;
