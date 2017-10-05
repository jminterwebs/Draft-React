import fetch from 'isomorphic-fetch';


export const draftPlayer = (selectedPlayer, leagueInfo) => {

  var  drafting_round = leagueInfo.draft_round % 2
  var  drafting_team = (leagueInfo.draft_spot % 10 || 10)


  if (leagueInfo.draft_round %2 == 1){
      drafting_team++
      if (drafting_team == 11){
        drafting_team = 1
      }

  } else if (leagueInfo.draft_round %2 == 0) {
      drafting_team = 10 - drafting_team
      if (drafting_team == 0){
        drafting_team = 10

      }


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
        .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: {leagueInfo, selectedPlayer, drafting_team}})
      }).then(function(){
        leagueInfo.draft_spot ++
        if (leagueInfo.draft_spot % 10 == 0) {
          leagueInfo.draft_round ++

        }
      })

  }
}}
