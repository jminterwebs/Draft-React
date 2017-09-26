import React, { Component } from 'react';
import AvailablePlayers from './components/AvailablePlayers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/fetchPlayers.js'

import './App.css';

class App extends Component {

  componentWillMount(){
     if(!this.props.players){
      this.props.actions.fetchPlayers()
   }
  }



  render() {
    return (
      <div className="App">
       <AvailablePlayers availablePlayers={this.props.availablePlayers}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { availablePlayers: state.players.players}
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
