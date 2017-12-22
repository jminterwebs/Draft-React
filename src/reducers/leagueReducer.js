import update from 'immutability-helper'

export default function leagueReducer(state={loading: false, leagueInfo: {} }, action) {
  switch ( action.type ) {
    case 'LOADING_LEAGUE':
      return Object.assign({}, state, {loading:true})
    case 'FETCH_LEAGUE':
      return {loading:false,  leagueInfo: action.payload.league }
    case 'DRAFT_PLAYER':
      let index = state.leagueInfo.players.findIndex(player => player.id == action.payload.selectedPlayer.id)
      let team_id = action.payload.draft_team

      state = update(state, {
        leagueInfo: {
          teams: {
            [team_id]: {
              players: {
                $push: [action.payload.selectedPlayer]
              }
            }
          }
        }
      })

        state = update(state, {
          leagueInfo: {
            players: {
              $splice: [[index,1]]
            }
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
