import React from 'react'


const DraftedPlayerDetails = (props) => {






return (
  <li className={'playerMember ' + props.player.position} ><h2>{props.player.first_name}</h2><h2> {props.player.last_name}</h2></li>


)


}

export default DraftedPlayerDetails
