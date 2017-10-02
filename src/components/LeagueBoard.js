import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchPlayers from '../actions/fetchPlayers.js'

import AvailablePlayers from './AvailablePlayers'
import DraftedPlayers from './DraftedPlayers'


class LeagueBoard extends Component{


componentWillMount() {
  if(this.props.players){
    this.props.actions.fetchPlayers(this.props.match.params.id)
  }
}

render(){
return (
<div>
  <AvailablePlayers leagueBoard={this.props} players={this.props.players}/>
  <DraftedPlayers teams={this.props.players.teams}/>
</div>
)
}

}

function mapStateToProps(state){
  return {players: state.players,
          teams: state.teams
  }
}
function mapDispatchToProps(dispatch){
  return{actions: bindActionCreators(fetchPlayers, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueBoard)
