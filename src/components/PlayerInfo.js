import React, { Component } from 'react';
import PlayerDetails from './PlayerDetails'
import DraftPlayerButton from './DraftPlayerButton'
import AddToWatchList from './AddToWatchList'
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
     console.log("test")
     this.props.actions.draftPlayer(this.props.selectedPlayer, this.props.leagueInfo )
    }

    handleWatchPlayer(){

      this.props.watchPlayer.watchPlayer(this.props.selectedPlayer)
    }


  render(){
    return(

      <div className="playerInfoContainer">
      <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>
      <DraftPlayerButton draftPlayer={()=>this.handleOnClick()}/>
      <AddToWatchList watchList={()=>this.handleWatchPlayer()}/>
    </div>
  )
}
}
function mapStateToProps(state){
  return {selectedPlayer: state.selectedPlayer,

  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch),
          watchPlayer: bindActionCreators(watchPlayer,dispatch)}
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo)
