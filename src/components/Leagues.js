import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as fetchLeagues from '../actions/fetchLeagues.js'

class Leagues extends Component {

  componentWillMount(){
    if(!this.props.leahues){
      this.props.actions.fetchLeagues()
    }
  }

  

  render() {
    return (
      <div>
        <h1>{this.props.leagues.length}</h1>
        {this.props.leagues.map((league)=> {
          return (
            <li><Link to={`/leagues/${league.id}`}>{league.name}</Link></li>
          )
        })}
        <div>
          <li><Link to={'/leagues/new'}>Create new League</Link></li>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { leagues: state.leagues.leagues }
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(fetchLeagues, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Leagues)
