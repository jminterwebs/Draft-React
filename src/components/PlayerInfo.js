import React, { Component } from 'react';
import PlayerDetails from './PlayerDetails'
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

      <div className="playerInfoContainer">
      <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>
      <div className="playerInfoDraftButton" onClick={()=>this.handleOnClick()}><h3>DRAFT PLAYER </h3></div>
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
