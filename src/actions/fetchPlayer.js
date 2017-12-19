import fetch from 'isomorphic-fetch'

export function fetchPlayer(id) {
  return function(dispatch){
  dispatch({type: 'LOADING_PLAYER'})
  return fetch(`http://localhost:3001/players/${id}`)
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_PLAYER', playload: responseJson})
    })

  }
}
