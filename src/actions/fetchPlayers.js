import fetch from 'isomorphic-fetch';
export function fetchPlayers(id) {

  return function(dispatch){
    dispatch({type: 'LOADING_PLAYERS'})
    return fetch(`http://localhost:3001/leagues/${id}`)
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_PLAYERS', payload: responseJson})
    })

  }
}
