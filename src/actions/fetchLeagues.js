import fetch from 'isomorphic-fetch';
export function fetchLeagues() {

  return function(dispatch){
    dispatch({type: 'LOADING_LEAGUES'})
    return fetch('https://obscure-taiga-54498.herokuapp.com/leagues',{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    })
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_LEAGUES', payload: responseJson})
    })

  }
}
