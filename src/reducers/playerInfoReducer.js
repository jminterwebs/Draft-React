
export default function  playerInfoReducer(state = {}, action) {
  switch(action.type){
    case 'SELECT_PLAYER':
      return action.player
    case 'DRAFT_PLAYER':
      return ""
    default:
      return state;
      // return state.selectedPlayer
  }
}
