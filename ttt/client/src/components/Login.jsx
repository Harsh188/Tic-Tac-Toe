import React, {Component} from 'react'
import '../style/css/main.css'

class Login extends Component{
  render(){
    return(
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <h1><strong>TIC-TAC-TOE</strong></h1>
        </header>
        {/* Main */}
        <section id="main">
          <form action=".index.js" method="post">
            <p>
              <label>Username</label>
              <input type="text" name="username" id="username" />
            </p>
            <p>
              <lable>Password</lable>
              <input type="password" name="password" id="password" />
            </p>
            <br />
            <center>
              <input type="submit" defaultValue="Login" id="auth" />
            </center>
          </form>
          <p /><center>
            Forgot Password?<br />
            New player? <a href="hello.html"> Sign In</a><br />
          </center><p />
        </section>
        {/* Footer */}
        <footer id="footer">
          <p>Web Technologies Mini-project 2020</p>
        </footer>
      </div>
    )
  }
}

export default Login;