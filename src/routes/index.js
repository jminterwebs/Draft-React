import React from 'react'
import {  BrowserRouter,  Route, Switch } from 'react-router-dom'

import Home from '../components/Home'

export default () => (

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/123' component={Home}/>
      <Route path='/456' component={Home}/>
    </Switch>

  </BrowserRouter>
)
