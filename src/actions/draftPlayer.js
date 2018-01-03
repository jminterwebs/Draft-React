import fetch from 'isomorphic-fetch';

export const draftPlayer = (selectedPlayer, leagueInfo) => {
  let draft_team = leagueInfo.draft_spot % 10

  draft_team == 0 ? draft_team = 10 : null

  leagueInfo.draft_round = Math.floor((leagueInfo.draft_spot - 1) /10) +1

  if(leagueInfo.draft_round % 2 === 0){
    draft_team = 11 - draft_team
  }


  return function(dispatch){
    if(selectedPlayer.id){
       return fetch(`http://localhost:3001/leagues/${leagueInfo.id}`, {
        method: "PATCH",
        body: JSON.stringify({player: selectedPlayer.id,
                              drafting_team: draft_team -1
                            }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(
        console.log(`Team ${draft_team} drafted ${selectedPlayer.full_name} in spot ${leagueInfo.draft_spot} in round ${leagueInfo.draft_round}`)
      ).then(res => { dispatch({type: 'DRAFT_PLAYER', payload: {selectedPlayer, leagueInfo, draft_team}})}

      ).then(
        leagueInfo.draft_spot++
      )

      }
    }
  }


  //
  // .then(responseJson => {
  //   dispatch({type: 'FETCH_LEAGUES', payload: responseJson})
