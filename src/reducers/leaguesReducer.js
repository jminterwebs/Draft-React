// import update from 'immutability-helper'

export default function leaguesReducer(state= {loading: false, leagues:[]}, action) {
  switch (action.type){
    case 'LOADING_LEAGUES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LEAGUES':
      return {loading: false, leagues: action.payload}
    case 'CREATE_LEAGUE':
      console.log(action)
    default:
    return state;
  }
}
