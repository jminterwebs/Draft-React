import React, { Component} from 'react';
import DraftPlayer from './DraftPlayer.js'
import PlayerInfo from './PlayerInfo'
import TeamInfo from './TeamInfo'
import DraftedPlayers from './DraftedPlayers'




  class AvailablePlayers extends Component {





  render(){
    return (
      <div>
        <div className="draftInfoWrapper">
          <div className="availablePlayersList">
            {this.props.availablePlayers
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
            <TeamInfo />
          </div>
        </div>
        <DraftedPlayers/>
      </div>
    )
  }
}





export default AvailablePlayers
