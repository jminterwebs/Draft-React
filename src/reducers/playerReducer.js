import update from 'immutability-helper'

export default function playerReducer(state={loading: false, players:[], teams: [] }, action) {
  switch ( action.type ) {
    case 'LOADING_PLAYERS':
      return Object.assign({}, state, {loading:true})
    case 'FETCH_PLAYERS':
      return {loading:false, players: action.payload.players, teams: action.payload.teams }
    case 'DRAFT_PLAYER':

        state = update(state, {
        players: {
          [action.payload.player.id-1]: {
            team_id: {$set: action.payload.team_id}
          }
        }
      }
    )
    state = update(state, {team_id: {$set: action.payload.team_id+1}})
    return state
    default:
      return state;
  }
}
