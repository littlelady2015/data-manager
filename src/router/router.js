import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from '../components/App'
import LoginApp from '../components/main/login'
import Flash from '../components/main/flash'
import Calender from '../components/main/calender'


const RouterApp = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={LoginApp}/>
      <Route path='/flash' component={Flash}/>
      <Route path='/calender' component={Calender}/>
    </Switch>
  </HashRouter>
)

export default RouterApp