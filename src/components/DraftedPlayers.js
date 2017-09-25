import React, {Component} from 'react'
import TeamInfo from './TeamInfo'


class DraftedPlayers extends Component {



render(){

  return(
    <div className='teamsWrapper'>
        <TeamInfo className='teamMembers' team_id={1}/>
        <TeamInfo className='teamMembers' team_id={2}/>
        <TeamInfo className='teamMembers' team_id={3}/>
        <TeamInfo className='teamMembers' team_id={4}/>
        <TeamInfo className='teamMembers' team_id={5}/>
        <TeamInfo className='teamMembers' team_id={6}/>
        <TeamInfo className='teamMembers' team_id={7}/>
        <TeamInfo className='teamMembers' team_id={8}/>
        <TeamInfo className='teamMembers' team_id={9}/>
        <TeamInfo className='teamMembers' team_id={10}/>

    </div>


  )
}

}




export default DraftedPlayers
