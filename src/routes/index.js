import React from 'react'
import {  BrowserRouter,  Route, Switch } from 'react-router-dom'

import Leagues from '../components/Leagues'
import LeagueBoard from '../components/LeagueBoard'
import LeagueNew from '../components/LeagueNew'

const Routes = (props) => (

  <BrowserRouter>
    <Switch>

    <Route exact path='/leagues' render={() => <Leagues leagues={props.leagues}/> }/>
    <Route exact path='/leagues/new' component={LeagueNew}/>
    <Route path='/leagues/:id' component={LeagueBoard}/>


    </Switch>

  </BrowserRouter>
)

export default Routes
