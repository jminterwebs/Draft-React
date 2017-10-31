import React from 'react'
import TeamInfo from './TeamInfo'




const DraftedPlayers = props => {





    return(
      <div className='teamsWrapper'>
        {props.teams.teamInfo.map((team)=>{
          return (
            <TeamInfo key={team.id} teamInfo={team}/>
          )
        })}
      </div>

    )



}


export default DraftedPlayers
