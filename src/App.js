import React, { Component } from 'react';
import AvailablePlayers from './components/AvailablePlayers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/fetchPlayers.js'

import './App.css';

class App extends Component {





  render() {
    return (
      <div className="App">
       <AvailablePlayers/>
      </div>
    );
  }
}




export default App
