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
    <div className="playerInfoContainer">
      <div className="playerInfo">
        <h3 className="playerInfoName">Name: {this.props.selectedPlayer.first_name} {this.props.selectedPlayer.last_name}</h3>
        <h2 className="playerInfoPosition">Position: {this.props.selectedPlayer.position}</h2>
        <h2 className="playerInfoRank">  Rank: {this.props.selectedPlayer.rank}</h2>
        <h2 className="playerInfoProjectedPoints">Projected Points: {this.props.selectedPlayer.projected_points}</h2>
      </div>

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
