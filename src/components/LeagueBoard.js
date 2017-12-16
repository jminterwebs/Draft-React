import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchLeague from '../actions/fetchLeague.js'
import * as fetchTeams from '../actions/fetchTeams.js'


import AvailablePlayers from './AvailablePlayers'
import DraftedPlayers from './DraftedPlayers'


class LeagueBoard extends Component{


componentWillMount() {
  if(this.props.leagueInfo){
    this.props.fetchLeague.fetchLeague(this.props.match.params.id)
  }

}

render(){
return (
<div>
  <AvailablePlayers leagueInfo={this.props.leagueInfo.leagueInfo}     players={this.props.players.players} currentTeam={this.props.teams}/>


  <DraftedPlayers teams={this.props.teams}/>
</div>
)
}

}

function mapStateToProps(state){
  return {leagueInfo: state.league,
  }
}
function mapDispatchToProps(dispatch){
  return{fetchLeague: bindActionCreators(fetchLeague, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueBoard)
