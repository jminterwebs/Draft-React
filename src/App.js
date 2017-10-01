import React, { Component } from 'react';
import AvailablePlayers from './components/AvailablePlayers'
import { connect } from 'react-redux'
import Leagues from './components/Leagues'
import { bindActionCreators } from 'redux'
import * as fetchLeagues from './actions/fetchLeagues.js'
import DraftedPlayers from './components/DraftedPlayers'
import Routes from './routes/index'
import './App.css';

class App extends Component {

  componentWillMount(){
    if(this.props.leagues){
      this.props.actions.fetchLeagues()
    }
  }



  render() {
    return (

      <div className="App">
        <Routes leagues={this.props.leagues} />
        {/* <AvailablePlayers availablePlayers={this.props.availablePlayers} team_id={this.props.team_id}/>
       <DraftedPlayers/> */}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { leagues: state.leagues.leagues }
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(fetchLeagues, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
