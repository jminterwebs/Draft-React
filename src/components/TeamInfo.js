import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fetchTeams.js'





class TeamInfo extends Component {


  componentWillMount(){

    if(this.props.team){
      
   this.props.actions.fetchTeam(this.props.teamInfo.id)
  }
  }

  render(){
    return (
      <div className='teamMembers'>
        {this.props.teamInfo.name}
        {this.props.teamInfo.id}
      </div>

    )
  }
}

function mapStateToProps(state){
  return{ team: state.team}

}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo)
