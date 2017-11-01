import fetcg from 'isomorphic-fetch'

export const fetchTeams = (league_id, team) => {

return function(dispatch){
  dispatch({type: 'LOADING_TEAMS'})
    return  fetch(`https://obscure-taiga-54498.herokuapp.com/leagues/${league_id}/teams`,{
      headers: {

      }
    })
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_TEAMS', payload: responseJson})
    })

  }

}
