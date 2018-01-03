
export default function  playerInfoReducer(state = {loading: false, player: {}}, action) {
  switch(action.type){
    case 'LOADING_PLAYER':
      return Object.assign({}, state, {loading:true})
    case 'SELECT_PLAYER':
      console.log(action.playload.player)
      return {loading: false, player: action.playload.player}
    case 'DRAFT_PLAYER':
      return {player: ""}
    default:
      return state;
      // return state.selectedPlayer
  }
}
