import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchPlayers from '../actions/fetchPlayers.js'

import AvailablePlayers from './AvailablePlayers'


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
</div>
)
}

}

function mapStateToProps(state){
  return {players: state.players
  }
}
function mapDispatchToProps(dispatch){
  return{actions: bindActionCreators(fetchPlayers, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueBoard)
