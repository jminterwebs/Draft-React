import React from 'react'


const DraftedPlayerDetails = (props) => {






return (
  <li className={'playerMember ' + props.player.position} ><h2>{props.player.full_name}</h2></li>


)


}

export default DraftedPlayerDetails
