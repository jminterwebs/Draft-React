
export default function teamInfoReducer( state= {loading: false, teamInfo: {}}, action){
  switch(action.type){
    case 'LOADING_TEAM':
    return Object.assign({}, state, {loading:true})
    case 'FETCH_TEAM':
    return {loading: false, teamInfo: action.payload}
    default:
    return state;

  }
}
