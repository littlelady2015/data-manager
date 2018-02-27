import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import Header from './header'

import LoginApp from './main/login'
import Flash from './main/flash'
import Calender from './main/calender'

const App = () => (
  <HashRouter>
    <Header>
      <Route path='/login' component={LoginApp}/>
      <Route path='/flash' component={Flash}/>
      <Route path='/calender' component={Calender}/>
    </Header>
  </HashRouter>
)

export default App




