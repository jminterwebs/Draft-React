import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchLeagues from '../actions/fetchLeagues.js'

class Leagues extends Component {

  componentWillMount(){
    if(!this.props.leahues){
      this.props.actions.fetchLeagues()
    }
  }

  handleOnClick() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleOnClick()}>{this.props.leagues.length}</h1>
        {this.props.leagues.map((league)=> {
          return (
            <h3>{league.name}</h3>

          )
        })}
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
