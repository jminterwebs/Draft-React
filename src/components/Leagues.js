import React, { Component} from 'react'
import { Link } from 'react-router-dom'


const Leagues = (props) => {


    return (
      <div>
        
        {props.leagues.map((league)=> {
          return (
            <li key={league.id}><Link to={`/leagues/${league.id}`}>{league.name}</Link></li>
          )
        })}
        <div>
          <li><Link to={'/leagues/new'}>Create new League</Link></li>
        </div>
      </div>

    )
  }



export default Leagues
