import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/draftPlayer.js'

class  PlayerInfo extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);

   }
   handleOnClick() {
     this.props.actions.draftPlayer(this.props.selectedPlayer)
    }


  render(){
    return(
    <div>
      <h3>Name: {this.props.selectedPlayer.first_name} {this.props.selectedPlayer.last_name}</h3>
      <h2>Position: {this.props.selectedPlayer.position} Rank: {this.props.selectedPlayer.rank}</h2>
      <h2>Projected Points: {this.props.selectedPlayer.projected_points}</h2>

      <div onClick={()=>this.handleOnClick()}><h3>DRAFT PLAYER </h3></div>
    </div>
  )
}
}
function mapStateToProps(state){
  return {selectedPlayer: state.selectedPlayer
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo)
