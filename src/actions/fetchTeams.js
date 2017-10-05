import fetcg from 'isomorphic-fetch'

export const fetchTeam = (team) => {

return function(dispatch){
  dispatch({type: 'LOADING_TEAM'})
    return  fetch(`http://localhost:3001/teams/${team}`)
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_TEAM', payload: responseJson})
    })

  }

}
