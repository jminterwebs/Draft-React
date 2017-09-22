import React, { Component} from 'react';
import DraftPlayer from './DraftPlayer.js'
import PlayerInfo from './PlayerInfo'
import TeamInfo from './TeamInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fetchPlayers.js'



  class AvailablePlayers extends Component {

    componentWillMount(){
       if(!this.props.players){
        this.props.actions.fetchPlayers()
     }
    }


  render(){
    return (
      <div className="draftInfoWrapper">
        <div className="availablePlayersList">
          {this.props.availablePlayers.map((player) =>{
            return (
              <DraftPlayer
                player={player} />
            )
          })}
        </div>
        <div className= "selectedPlayerInfo">
          <PlayerInfo/>
        </div>
        <div className= "teamPlayerInfo">
          <TeamInfo />
        </div>
      </div>
    )
  }
}

  function mapStateToProps(state) {
    return { availablePlayers: state.players.players}
  }

  function mapDispatchToProps(dispatch){
      return {actions: bindActionCreators(actions, dispatch)}
  }



export default connect(mapStateToProps, mapDispatchToProps)(AvailablePlayers)
