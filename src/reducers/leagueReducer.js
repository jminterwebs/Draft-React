import update from 'immutability-helper'

export default function leagueReducer(state={loading: false, leagueInfo: {} }, action) {
  switch ( action.type ) {
    case 'LOADING_LEAGUE':
      return Object.assign({}, state, {loading:true})
    case 'FETCH_LEAGUE':
      return {loading:false,  leagueInfo: action.payload.league }
    case 'DRAFT_PLAYER':
      let index = state.leagueInfo.players.findIndex(player => player.id == action.payload.selectedPlayer.id)
      let team_id = action.payload.draft_team -1



      console.log(`team ${team_id} is the ${state.leagueInfo.teams[team_id].name}`)
      console.log(`the selectedPlayer is ${state.leagueInfo.players[index].full_name}`)


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
          leagueInfo: {
            draft_spot: {
              $set: action.payload.leagueInfo.draft_spot}
            }

          }
        )

    return state

    default:
      return state;
  }
}
