import fetch from 'isomorphic-fetch';
export function fetchPlayers() {

  return function(dispatch){
    dispatch({type: 'LOADING_PLAYERS'})
    return fetch('http://localhost:3001/players')
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_PLAYERS', payload: responseJson})
    })
    
  }
}
