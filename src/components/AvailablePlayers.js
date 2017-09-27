import React, { Component} from 'react';
import DraftPlayer from './DraftPlayer.js'
import PlayerInfo from './PlayerInfo'
import TeamDetails from './TeamDetails'





  const AvailablePlayers =  (props) => {


    return (
      <div>
        <div className="draftInfoWrapper">
          <div className="availablePlayersList">
            {props.availablePlayers
              .filter((player) =>{
                return player.team_id == null
              }).map((player) => {
                return(
                  <DraftPlayer player={player}/>
                )
              })
            }
          </div>
          <div className= "selectedPlayerInfo">
            <PlayerInfo/>
          </div>
          <div className= "teamPlayerInfo">
            <TeamDetails />
          </div>
        </div>

      </div>
    )

  }






export default AvailablePlayers
