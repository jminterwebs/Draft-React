import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectedPlayer } from '../actions/selectedPlayer'

class DraftPlayer extends Component {

  selectPlayer = event => {
    this.props.selectedPlayer(this.props.player)
  }

  render(){
  return (
    <li className={this.props.player.position } onClick={this.selectPlayer}  key= {this.props.player.id} >
      <p >{this.props.player.first_name} {this.props.player.last_name}</p>

    </li>
  )
}
}

function mapStateToProps(state){
  return {selectedPlayer: state.selectedPlayer}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectedPlayer: selectedPlayer
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DraftPlayer)
