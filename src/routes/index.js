import React from 'react'
import {  BrowserRouter,  Route, Switch } from 'react-router-dom'

import Leagues from '../components/Leagues'
import LeagueBoard from '../components/LeagueBoard'
import LeagueNew from '../components/LeagueNew'

export default () => (

  <BrowserRouter>
    <Switch>

    <Route exact path='/leagues' component={Leagues}/>
    <Route exact path='/leagues/new' component={LeagueNew}/>
    <Route path='/leagues/:id' component={LeagueBoard}/>


    </Switch>

  </BrowserRouter>
)
