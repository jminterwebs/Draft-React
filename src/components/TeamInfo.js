import React, {Component} from 'react'
import { connect } from 'react-redux'





class TeamInfo extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

 componentWillMount(){
    let team = this.props.teamMembers.filter((player)=> {
      return player.team_id == this.props.team_id
    })
    return team
  }
  handleOnClick(){
    console.log(this.props)
  }

  render(){
  return (


      <div className='teamMembers'>
        <input className="teamBox" type="text"></input>
        {this.props.teamMembers.filter((player)=>{
          if(this.props.team_id != null){
            return player.team_id == this.props.team_id
          }
        }).map((player)=> {
          return( <li className={'playerMember ' + player.position} ><h2>{player.first_name}</h2><h2> {player.last_name}</h2></li>)
        })}
      </div>

  )}
}
function mapStateToProps(state){
  return {teamMembers: state.players.players}
}

export default connect(mapStateToProps)(TeamInfo)
