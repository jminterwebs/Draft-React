import React, { Component } from 'react';
import PlayerDetails from './PlayerDetails'
import DraftPlayerButton from './DraftPlayerButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/draftPlayer.js'
import * as watchPlayer from '../actions/watchlist.js'

class  PlayerInfo extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleWatchPlayer = this.handleWatchPlayer.bind(this);

   }
   handleOnClick() {

     this.props.actions.draftPlayer(this.props.selectedPlayer.player, this.props.leagueInfo )
    }

    handleWatchPlayer(){
      this.props.watchPlayer.watchPlayer(this.props.selectedPlayer)
    }


  render(){
    return(

      <div className="playerInfoContainer">
        {console.log(this.props)}
      <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>
      <DraftPlayerButton draftPlayer={()=>this.handleOnClick()}/>

    </div>
  )
}
}
function mapStateToProps(state){
  return {selectedPlayer: state.selectedPlayer,

  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo)
