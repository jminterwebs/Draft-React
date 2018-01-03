import fetch from 'isomorphic-fetch'

export function fetchPlayer(id) {
  return function(dispatch){
  dispatch({type: 'LOADING_PLAYER'})
  return fetch(`https://obscure-taiga-54498.herokuapp.com/players/${id}`,{
    mode: 'cors'
  })
    .then(res => {return res.json()})
    .then(responseJson => {
      dispatch({type: 'FETCH_PLAYER', playload: responseJson})
    })

  }
}
