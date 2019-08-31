export default function playerListReducer(
  state = { loading: false, players: [] },

  action
) {
  switch (action.type) {
    case 'LOADING_PLAYERS':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_PLAYERS':
      return { loading: false, players: action.payload.players };
    default:
      return state;
  }
}
