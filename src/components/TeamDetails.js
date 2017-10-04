import React, {Component} from 'react'
import { connect } from 'react-redux'


class TeamDetails extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);

   }
   handleOnClick() {
     console.log(this.props.team_id)
    }



  render(){
    return(

      <div>

    </div>
  )
}
}
function mapStateToProps(state){
  return {teamMembers: state.players

  }
}



export default connect(mapStateToProps)(TeamDetails)
