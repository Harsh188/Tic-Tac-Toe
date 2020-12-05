import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login } from '../components'
import {Game} from '../components'
// import {} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
          <Route path ='/' exact component={Login} />
          <Route path ="/user/:username" exact component={Game} />
        </Router>
    )
}

export default App