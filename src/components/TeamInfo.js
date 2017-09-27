import React, {Component} from 'react'






const TeamInfo =(props) => {

  return (
      <div className='teamMembers'>
        <input className="teamBox" placeholder="Team Name" type="text"></input>
        {props.teamMembers.filter((player)=>{
          if(props.team_id != null){
            return player.team_id == props.team_id
          }
        }).map((player)=> {
          return( <li className={'playerMember ' + player.position} ><h2>{player.first_name}</h2><h2> {player.last_name}</h2></li>)
        })}
      </div>

  )}



export default TeamInfo
