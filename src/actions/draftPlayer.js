import fetch from 'isomorphic-fetch';
let team_id = 1;
let round = 1;
export const draftPlayer = (player) => {

  return function(dispatch){

  if (player)  {
    return fetch(`http://localhost:3001/players/${player.id}`,{
          method: "PATCH",
          body: JSON.stringify({ team_id: team_id}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }


    )
        .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: {player, team_id}})
      }).then(function(){

        if (round == 1){
          team_id++
          if(team_id > 10){
            team_id = 10
            round = 2
          }
        } else if( round == 2 ){
          team_id --
          if(team_id < 1){
            team_id = 1
            round = 1
          }
        }
      })
    }
  }
}
