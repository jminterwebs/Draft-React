import update from 'immutability-helper'

export default function leagueReducer(state={loading: false, players:[], teams: [], leagueInfo: {} }, action) {
  switch ( action.type ) {
    case 'LOADING_LEAGUE':
      return Object.assign({}, state, {loading:true})
    case 'FETCH_LEAGUE':
      return {loading:false, players: action.payload.players, teams: action.payload.teams, leagueInfo: action.payload }
    case 'DRAFT_PLAYER':
    action.payload.selectedPlayer.id

        state = update(state, {
          players: {
            $splice: [[action.payload.selectedPlayer.id-1,1]]
          }
        })


        state = update(state, {
        leagueInfo: {  $set: action.payload.leagueInfo}
          }
        )
    return state

    default:
      return state;
  }
}
