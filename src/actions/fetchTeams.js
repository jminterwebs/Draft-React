import fetcg from 'isomorphic-fetch'

export const fetchTeams = (league_id, team) => {

return function(dispatch){
  dispatch({type: 'LOADING_TEAMS'})
    return  fetch(`http://localhost:3001/leagues/${league_id}/teams`)
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_TEAMS', payload: responseJson})
    })

  }

}
