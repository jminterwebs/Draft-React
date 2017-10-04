import fetch from 'isomorphic-fetch'

export const createLeague = (league) => {

  return function(dispatch){

    if(league){

      fetch('http://localhost:3001/leagues/', {
        method: "POST",
        body: JSON.stringify({
              league: {
                name: league.name,
                teams_attributes: league.teams_attributes
              }
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then( res => {dispatch({type: 'CREATE_LEAGUE', payload: {league}})})
      .then(league => console.log(JSON.stringify(league)))


    }


  }



}
