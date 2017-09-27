import React from 'react'


const PlayerDetails = (props) => {


return (

    <div className="playerInfo">
      <h3 className="playerInfoName">Name: {props.selectedPlayer.first_name} {props.selectedPlayer.last_name}</h3>
      <h2 className="playerInfoPosition">Position: {props.selectedPlayer.position}</h2>
      <h2 className="playerInfoRank">  Rank: {props.selectedPlayer.rank}</h2>
      <h2 className="playerInfoProjectedPoints">Projected Points: {props.selectedPlayer.projected_points}</h2>
    </div>

)

}

export default PlayerDetails
