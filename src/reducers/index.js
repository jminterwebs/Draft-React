import { combineReducers } from 'redux'
import leagueReducer from './leagueReducer'
import playerInfoReducer from './playerInfoReducer'
import leaguesReducer from './leaguesReducer'
import teamInfoReducer from './teamInfoReducer'


const rootReducer = combineReducers({
  league: leagueReducer,
  selectedPlayer: playerInfoReducer,
  leagues: leaguesReducer,
  team: teamInfoReducer
})


export default rootReducer;
