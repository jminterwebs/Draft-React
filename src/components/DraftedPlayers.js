import React, {Component} from 'react'
import TeamInfo from './TeamInfo'
import { connect } from 'react-redux'



class DraftedPlayers extends Component{




render(){
    return(
      <div className='teamsWrapper'>
          <TeamInfo team_id={1} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={2} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={3} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={4} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={5} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={6} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={7} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={8} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={9} teamMembers = {this.props.teamMembers}/>
          <TeamInfo team_id={10} teamMembers = {this.props.teamMembers}/>

      </div>


    )
    }
}



function mapStateToProps(state){
  return {teamMembers: state.players.players}
}

export default connect(mapStateToProps)(DraftedPlayers)
