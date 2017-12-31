import update from 'immutability-helper'

export default function leaguesReducer(state= {loading: false, leagues:[]}, action) {
  switch (action.type){
    case 'LOADING_LEAGUES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LEAGUES':
      return {loading: false, leagues: action.payload.leagues}
    case 'CREATE_LEAGUE':
    
    return update(state, {leagues:{
      $push: [action.payload.json.league]
    }})

    default:
    return state;
  }
}
