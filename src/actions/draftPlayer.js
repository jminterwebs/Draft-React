import fetch from 'isomorphic-fetch';


export const draftPlayer = (player, leagueInfo) => {
  let  drafting_team = leagueInfo.draft_spot
    if (drafting_team % 10 == 0) {
        drafting_team = 10
        }



  return function(dispatch){

  if (player)  {
    return fetch(`http://localhost:3001/leagues/${leagueInfo.id}`,{
          method: "PATCH",
          body: JSON.stringify({ player: player.id,
                                 drafting_team: drafting_team
                                }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }

    )
        .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: {player, leagueInfo}})
      })
  }
}}
