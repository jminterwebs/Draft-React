import React, {Component} from 'react'
import TeamInfo from './TeamInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fetchTeams.js'


class DraftedPlayers extends Component{
    constructor(props){
      super(props)

    }



  render(){
    return(
      <div className='teamsWrapper'>
        {this.props.teams.teams.map((team)=>{

          return (
            <TeamInfo teamInfo={team}/>
          )
        })}
      </div>

    )
  }


}


export default DraftedPlayers
