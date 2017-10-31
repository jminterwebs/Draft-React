import fetcg from 'isomorphic-fetch'

export const fetchTeams = (league_id, team) => {

return function(dispatch){
  dispatch({type: 'LOADING_TEAMS'})
    return  fetch(`https://obscure-taiga-54498.herokuapp.com/${league_id}/teams`)
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_TEAMS', payload: responseJson})
    })

  }

}
