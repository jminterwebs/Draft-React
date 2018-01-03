import fetch from 'isomorphic-fetch'

export const createLeague = (league) => {

  return function(dispatch){

    if(league){

      fetch('https://obscure-taiga-54498.herokuapp.com/leagues/', {
        method: "POST",
        redirect: 'follow',
        body: JSON.stringify({
              league: {
                name: league.name,
                teams_attributes: league.teams_attributes
              }
        }),
        headers: newLeageuHeaders
      })
      .then(res => Promise.all([res, res.json()]))
      .then(([res, json]) => {
        dispatch({type:'CREATE_LEAGUE', payload: {json}})
        // if (res.redirected){
        //   location.href = res.url
        // }
      })
       // .then( res => {dispatch({type: 'CREATE_LEAGUE', payload: {league}})})
    }
  }

}


var newLeageuHeaders = new Headers({  'Accept': 'application/json',
  'Content-Type': 'application/json'})
