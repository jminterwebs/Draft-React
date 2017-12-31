import fetch from 'isomorphic-fetch'

export const createLeague = (league) => {

  return function(dispatch){

    if(league){

      fetch('http://localhost:3001/leagues/', {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
              league: {
                name: league.name,
                teams_attributes: league.teams_attributes
              }
        }),
        headers: newLeageuHeaders
      })
      .then(res => {console.log(res.json())})
      .then(function(){console.log(newLeageuHeaders.get('league_id'))})
      .then( res => {dispatch({type: 'CREATE_LEAGUE', payload: {league}})})
    }
  }

}


var newLeageuHeaders = new Headers({  'Accept': 'application/json',
  'Content-Type': 'application/json'})
