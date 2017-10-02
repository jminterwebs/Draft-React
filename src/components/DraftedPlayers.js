import React, {Component} from 'react'
import TeamInfo from './TeamInfo'




const DraftedPlayers = (props) =>{

    return(


      <div className='teamsWrapper'>

        {props.teams.map((team)=> {

          return (
            <TeamInfo teamInfo={team}/>
          )

        })
      }



      </div>


    )
}


export default DraftedPlayers
