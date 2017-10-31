import React, {Component} from 'react'

import DraftedPlayerDetails from './DraftedPlayerDetails'



class TeamInfo extends Component {



  render(){

    return (
      <div className='teamMembers'>
        lkmlkm
        <h1 className= 'teamName'>{this.props.teamInfo.name}</h1>
        {this.props.teamInfo.players.map((player)=> {
          return (
            <DraftedPlayerDetails player={player}/>
          )

         })}

      </div>

    )
  }
}



export default TeamInfo
