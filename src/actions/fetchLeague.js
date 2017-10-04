import fetch from 'isomorphic-fetch';
export function fetchLeague(id) {

  return function(dispatch){
    dispatch({type: 'LOADING_LEAGUE'})
    return fetch(`http://localhost:3001/leagues/${id}`)
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_LEAGUE', payload: responseJson})
    })

  }
}
