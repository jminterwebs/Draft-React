import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchPlayers from '../actions/fetchPlayers.js'


class LeagueBoard extends Component{


componentWillMount() {
  if(this.props.draftBoard){
    this.props.actions.fetchPlayers(this.props.match.params.id)
  }
}

render(){
return (
  <div> This is a league Draft Board Stub
    {this.props.match.params.id}
  </div>
)
}

}

function mapStateToProps(state){
  return {draftBoard: state
  }
}
function mapDispatchToProps(dispatch){
  return{actions: bindActionCreators(fetchPlayers, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueBoard)
