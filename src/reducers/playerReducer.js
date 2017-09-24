import update from 'immutability-helper'

export default function playerReducer(state={loading: false, players:[]}, action) {
  switch ( action.type ) {
    case 'LOADING_PLAYERS':
      return Object.assign({}, state, {loading:true})
    case 'FETCH_PLAYERS':
      return {loading:false, players: action.payload}
    case 'DRAFT_PLAYER':
      let draftIndex = state.players.findIndex(function(player){
          return player.id === action.payload.id
        })
      //  state.players[draftIndex].team_id = action.payload.team_id
      // state.players = state.players.filter((player)=>{
      //     return player.team_id === null
      //   })
      // update(state.players[draftIndex], {team_id: {$apply: function(x){return x = action.payload.team_id}}})

    state = update(state, {
        players: {
          [action.payload.id]: {
            team_id: {$set: action.payload.team_id}
          }
        }
      }
    )
    return state
    default:
      return state;
  }
}
