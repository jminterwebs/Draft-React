import fetch from 'isomorphic-fetch';
export const draftPlayer = (player) => {
  return function(dispatch){
    return fetch(`http://localhost:3001/players/${player.id}`,{
        method: "PATCH",
        body: JSON.stringify({ team_id: 1}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
      .then(responseJson => {dispatch({type: 'DRAFT_PLAYER', payload: player})
    })
  }
}
