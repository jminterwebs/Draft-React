import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchLeague from '../actions/fetchLeague.js'



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
  <AvailablePlayers leagueInfo={this.props.leagueInfo.leagueInfo} players={this.props.leagueInfo.leagueInfo.players}/>


  {/* <DraftedPlayers teams={this.props.teams}/> */}
</div>
)
}

}

function mapStateToProps(state){
  return {leagueInfo: state.league
  }
}
function mapDispatchToProps(dispatch){
  return{fetchLeague: bindActionCreators(fetchLeague, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueBoard)

LeagueBoard.defaultProps = {
  leagueInfo: {}

}
