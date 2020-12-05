import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login } from '../components'
import {Game} from '../components'
import {SignUp} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
          <Route path ='/' exact component={Login} />
          <Route path ='/signUp' exact component={SignUp}/>
          <Route path ="/user/:username/:id" exact component={Game} />
        </Router>
    )
}

export default App