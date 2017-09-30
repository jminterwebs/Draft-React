import update from 'immutability-helper'

export default function leagueReducer(state= {loading: false, leagues:[]}, action) {
  switch (action.type){
    case 'LOADING_LEAGUES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LEAGUES':
      return {loading: false, leagues: action.payload}
    default:
    return state;
  }
}
