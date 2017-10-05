import update from 'immutability-helper'

export default function teamsInfoReducer( state= {loading: false, teamInfo: []}, action){
  switch(action.type){
    case 'LOADING_TEAMS':
    return Object.assign({}, state, {loading:true})
    case 'FETCH_TEAMS':
    return {loading: false, teamInfo: action.payload}
    case 'DRAFT_PLAYER':
    let id = action.payload.drafting_team-1
    console.log(action.payload)
    console.log(state)
    debugger
    // state = update(state, {
    //   teamInfo: {
    //     id:{
    //       players: { $push: [action.payload.selectedPlayer]}
    //     }
    //   }
    // })



    default:
    return state;

  }
}
