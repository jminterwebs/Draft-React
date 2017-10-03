import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/addTeam.js'

class LeagueNew extends Component {
  constructor(props){
    super(props)

    this.state = {
      league: {
          name: "",
          teams: []
      }
    }
    this.handleLeagueChange = this.handleLeagueChange.bind(this)
    this.handleTeamChange = this.handleTeamChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleLeagueChange(event) {
   this.setState({league: {
                    name: event.target.value,
                    teams: []}
                  });
   console.log(this.state)
 }

 handleTeamChange= (teamIndex) => (event)=> {
   this.state.league.teams.splice(teamIndex,1, event.target.value)
   var newArray = this.state.league.teams
   this.setState({league: {
                  teams: newArray
   }})
   console.log(this.state.league.teams)
 }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }

render(){
return (
  <div>
    <form onSubmit={event => this.handleLeagueSubmit(event)}>

      <input value={this.state.value}
        onChange={this.handleLeagueChange}
        type="text" placeholder="League Name"/>

      <input value={this.state.value}
        onChange={this.handleTeamChange(0)}
        value={this.state.value}
        type="text" placeholder="Team One"/>

      <input value={this.state.value}
        onChange={this.handleTeamChange(1)}
        type="text" placeholder="Team Two"/>

      <input value={this.state.value}
        onChange={this.handleTeamChange(2)}
        type="text" placeholder="Team Three"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(3)}
        type="text" placeholder="Team Four"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(4)}
        type="text" placeholder="Team Five"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(5)}
        type="text" placeholder="Team Six"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(6)}
        type="text" placeholder="Team Seven"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(7)}
        type="text" placeholder="Team Eight"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(8)}
        type="text" placeholder="Team Nine"/>
      <input value={this.state.value}
        onChange={this.handleTeamChange(9)}
        type="text" placeholder="Team Ten"/>

      <input type="submit"/>
    </form>

  </div>
)
}

}

export default LeagueNew
