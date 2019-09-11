export default function selectedPlayerReducer(
  state = { loading: false, player: {} },

  action
) {
  switch (action.type) {
    case 'LOADING_PLAYER':
      return { ...state, loading: true };
    case 'FETCH_PLAYER':
      return { loading: false, player: action.payload };
    default:
      return state;
  }
}
