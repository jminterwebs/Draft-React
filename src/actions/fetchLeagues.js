import fetch from 'isomorphic-fetch';
export function fetchLeagues() {

  return function(dispatch){
    dispatch({type: 'LOADING_LEAGUES'})
    return fetch('http://localhost:3001/leagues')
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_LEAGUES', payload: responseJson})
    })

  }
}
