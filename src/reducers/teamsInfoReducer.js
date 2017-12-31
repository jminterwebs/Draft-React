import update from 'immutability-helper'

export default function teamsInfoReducer( state= {loading: false, teamInfo: []}, action){
  switch(action.type){
    case 'LOADING_TEAMS':
    return Object.assign({}, state, {loading:true})
    case 'FETCH_TEAMS':
    return {loading: false, teamInfo: action.payload}
    // case 'DRAFT_PLAYER':
    //
    // // let team_id = action.payload.draft_team
    // //
    // // return update(state, { teamInfo: {
    // //   [team_id]: {
    // //     players: {
    // //       $push: [action.payload.selectedPlayer]
    // //     }
    // //   }
    // // }})


    default:
    return state;

  }
}
