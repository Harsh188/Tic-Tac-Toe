import React, {Component} from 'react'
import api from '../api'

import '../style/css/main.css'

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChangeInputUsername = async event =>{
    const username = event.target.value
    this.setState({username})
  }

  handleChangeInputPassword = async event =>{
    const password = event.target.value
    this.setState({password})
  }

  handleSubmit = async event =>{
    event.preventDefault()
    console.log(this.state.username+' '+this.state.password)
    try{
      const user = JSON.stringify(
        await api.getUserByUsername(this.state.username))
      var jsonUser = JSON.parse(user).data.data

      console.log(jsonUser.password+' '+this.state.password)
      console.log(jsonUser._id)

      if(this.state.password==jsonUser.password){
        console.log("Yes")
        window.location.href = `/user/${this.state.username}/${jsonUser._id}`
      }
      else{
        window.alert('Password is incorrect.')
      }
    } catch(e){
      window.alert('Username does not exist.')
      return
    }
  }

  render() {
    const {username, password} = this.state
    const myStyle = {
      color: "#E6E6FA",
    }
    return (
      <div>
        <title>TIC-TAC-TOE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="assets/css/main.css" />
        {/* Wrapper */}
        <div id="wrapper">
          {/* Header */}
          <header id="header">
            <h1><strong>TIC-TAC-TOE</strong></h1>
          </header>
          {/* Main */}
          <section id="main">
            <form>
              <p>
                <label>Username</label>
                <input type="text" name="username" id="username" value={username} onChange={this.handleChangeInputUsername}/>
              </p>
              <p>
                <label>Password</label>
                <input type="password" name="password" id="password" value={password} onChange={this.handleChangeInputPassword}/>
              </p>
              <br />
              <center>
                <input type="submit" defaultValue="Login" id="auth" onClick={this.handleSubmit}/>
              </center>
            </form>
            <center><p style={myStyle}>
              New player? <a href="/signUp">Sign Up</a><br />
            </p></center>
          </section>
          {/* Footer */}
          <footer id="footer">
            <p style={myStyle}>Web Technologies Mini-project 2020</p>
          </footer>
        </div>
        {/* Scripts */}
      </div>
    );
  }
}

export default Login;