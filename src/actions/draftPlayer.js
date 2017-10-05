import fetch from 'isomorphic-fetch';


export const draftPlayer = (selectedPlayer, leagueInfo) => {

  var  drafting_round = leagueInfo.draft_round % 2
  var  drafting_team = (leagueInfo.draft_spot % 10 || 10)


  if (leagueInfo.draft_round %2 == 1){
      drafting_team++
      console.log('fowards ' + drafting_team)
  } else if (leagueInfo.draft_round %2 == 0) {
      drafting_team = 10 - drafting_team || 10
      console.log("backwards " + drafting_team)
  }

      leagueInfo.draft_spot ++
      if (leagueInfo.draft_spot % 10 == 0) {
        leagueInfo.draft_round ++
      }

return function(dispatch){

  if (selectedPlayer)  {
    return fetch(`http://localhost:3001/leagues/${leagueInfo.id}`,{
          method: "PATCH",
          body: JSON.stringify({ player: selectedPlayer.id,
                                 drafting_team: drafting_team
                                }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }

    )
        .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: {leagueInfo}})
      })
  }
}}
