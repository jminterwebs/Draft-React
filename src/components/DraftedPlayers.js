import React from 'react'
import TeamInfo from './TeamInfo'




const DraftedPlayers = props => {





    return(
      <div className='teamsWrapper'>
        3213213
        21
        {props.teams.teamInfo.map((team)=>{

          return (
            <TeamInfo key={team.id} teamInfo={team}/>
          )
        })}
      </div>

    )



}


export default DraftedPlayers
