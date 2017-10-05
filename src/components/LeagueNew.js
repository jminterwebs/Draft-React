import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/addLeague.js'
import { Redirect } from 'react-router'

class LeagueNew extends Component {
  constructor(props){
    super(props)

    this.state = {
      league: {
          name: "",
          teams_attributes: [],
      },
      fireRedirect: false
    }
    this.handleLeagueChange = this.handleLeagueChange.bind(this)
    this.handleTeamChange = this.handleTeamChange.bind(this)
    this.handleLeagueSubmit = this.handleLeagueSubmit.bind(this)
  }

  handleLeagueChange(event) {
   this.setState({league: {
                  name: event.target.value,
                  teams_attributes: this.state.league. teams_attributes
                    }
                  });
                  console.log(this.state.league)
 }

 handleTeamChange = (teamIndex) => (event)=> {
   this.state.league. teams_attributes.splice(teamIndex,1, {name: event.target.value})
   var newArray = this.state.league. teams_attributes
   this.setState({league: {
                  name: this.state.league.name,
                  teams_attributes: newArray
   }})

 }

  handleLeagueSubmit(event){
    event.preventDefault();
    this.props.createLeague(this.state.league)
    this.setState({league: {
                   name: this.state.league.name,
                   teams_attributes: this.state.league.teams_attributes
                 },
                  fireRedirect: true
    })


  }

render(){
  const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
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

    {fireRedirect && (
          <Redirect to={from || `/leagues/${this.props.leagues.length - 1}`}/>
        )}


  </div>
)
}

}

function mapStateToProps(state){
  return {league: state.league,
          leagues: state.leagues.leagues}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LeagueNew)
