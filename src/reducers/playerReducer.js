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

      state.players[draftIndex].team_id = action.payload.team_id
      console.log(state.players[draftIndex])
    default:
      return state;
  }
}
