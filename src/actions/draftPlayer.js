import fetch from 'isomorphic-fetch';


export const draftPlayer = (selectedPlayer, leagueInfo) => {

  var drafting_spot = leagueInfo.draft_spot

  var draft_team;
  var round = leagueInfo.draft_round


  if (drafting_spot % 10 == 0 && drafting_spot != 0){
    draft_team = 10

  } else {
  draft_team = drafting_spot % 10
  }

  // if (round % 2 == 1 && drafting_spot >= 19){
  //   draft_team = draft_team - 1

  // }


  if (round % 2 == 0 ){
      draft_team = 11 - draft_team
  }

draft_team-- 
  console.log(draft_team)
  console.log(leagueInfo.draft_spot)

return function(dispatch){

  if (selectedPlayer)  {
    return fetch(`http://localhost:3001/leagues/${leagueInfo.id}`,{
          method: "PATCH",
          body: JSON.stringify({ player: selectedPlayer.id,
                                 drafting_team: draft_team
                                }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }

    )
        .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: {leagueInfo, selectedPlayer, draft_team}})
      }).then(function(){

        if (leagueInfo.draft_spot % 10 == 0 && leagueInfo.draft_spot != 0) {
          leagueInfo.draft_round ++
        }
        leagueInfo.draft_spot ++
      })

  }
}}
