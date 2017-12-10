import fetch from 'isomorphic-fetch'

export const createLeague = (league) => {

  return function(dispatch){

    if(league){

      fetch('https://obscure-taiga-54498.herokuapp.com/leagues/', {
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
