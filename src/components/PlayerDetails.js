import React from 'react'


const PlayerDetails = (props) => {


return (

    <div className="playerInfo">
      {console.log(props)}
      {console.log("this")}
      {console.log(props.selectedPlayer.player)}
      <h3 className="playerInfoName">Name: {props.selectedPlayer.player.full_name} </h3>
      <h2 className="playerInfoPosition">Position: {props.selectedPlayer.player.position}</h2>
      <h2 className="playerInfoRank">  Rank: {props.selectedPlayer.player.rank}</h2>
      <h2 className="playerInfoProjectedPoints">Projected Points: {props.selectedPlayer.player.projected_points}</h2>
    </div>

)

}

export default PlayerDetails
