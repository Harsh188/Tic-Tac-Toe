import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Login} from '../components'
// import {} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
          <Login />
        </Router>
    )
}

export default App