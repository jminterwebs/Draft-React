import React from 'react';
import DraftPlayer from './DraftPlayer.js'
import PlayerInfo from './PlayerInfo'
import TeamDetails from './TeamDetails'
import TeamWatchList from './TeamWatchList'




  const AvailablePlayers =  (props) => {


    return (
      <div>
        <div className="draftInfoWrapper">

          <div className="availablePlayersList">

            {props.players
              .filter((player) =>{
                return player.team_id == null
              }).map((player) => {
                return(
                  <DraftPlayer key={player.unique_player_id } player={player}/>
                )
              })
            }
          </div>
          <div className= "selectedPlayerInfo">
            <PlayerInfo leagueInfo={props.leagueInfo}/>
          </div>
          <div className="teamWatchList">
            <TeamWatchList teamInfo={props}/>
          </div>
        </div>

      </div>
    )

  }






export default AvailablePlayers
