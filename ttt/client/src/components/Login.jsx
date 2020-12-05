import React, {Component} from 'react'
import api from '../api'

// import '../style/css/main.css'

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      usernameOne: '',
      passwordOne: '',
      usernameTwo: '',
      passwordTwo: '',
      backgroundColor1: '',
      backgroundColor2: '',
      user1: '',
      user2: '',
    }
  }

  handleChangeInputUsername1 = async event =>{
    const usernameOne = event.target.value
    this.setState({usernameOne})
  }

  handleChangeInputPassword1 = async event =>{
    const passwordOne = event.target.value
    this.setState({passwordOne})
  }

  handleChangeInputUsername2 = async event =>{
    const usernameTwo = event.target.value
    this.setState({usernameTwo})
  }

  handleChangeInputPassword2 = async event =>{
    const passwordTwo = event.target.value
    this.setState({passwordTwo})
  }

  handleChangeBackgroundColor1 = async event =>{
    const backgroundColor1 = 'rgba(0,128,0,0.25)'
    this.setState({backgroundColor1})
  }

  handleChangeBackgroundColor2 = async event =>{
    const backgroundColor2 = 'rgba(0,128,0,0.25)'
    this.setState({backgroundColor2})
  }

  handleSubmit1 = async event =>{
    event.preventDefault()
    console.log(this.state.usernameOne+' '+this.state.passwordOne)
    try{
      const user = JSON.stringify(
        await api.getUserByUsername(this.state.usernameOne))
      var jsonUser = JSON.parse(user).data.data

      console.log(jsonUser.password+' '+this.state.passwordOne)
      console.log(jsonUser._id)

      if(this.state.passwordOne==jsonUser.password){
        const user1 = 'yes'
        this.setState({user1})
        console.log("Yes1")
        this.handleChangeBackgroundColor1()
        this.checkReady()
      }
      else{
        window.alert('Password is incorrect.')
      }
    } catch(e){
      window.alert('Username does not exist.')
      return
    }
  }
  handleSubmit2 = async event =>{
    event.preventDefault()
    console.log(this.state.usernameTwo+' '+this.state.passwordTwo)
    try{
      const user = JSON.stringify(
        await api.getUserByUsername(this.state.usernameTwo))
      var jsonUser = JSON.parse(user).data.data

      console.log(jsonUser.password+' '+this.state.passwordTwo)
      console.log(jsonUser._id)

      if(this.state.passwordTwo==jsonUser.password){
        const user2 = 'yes'
        this.setState({user2})
        console.log("Yes2")
        this.handleChangeBackgroundColor2()
        this.checkReady()
      }
      else{
        window.alert('Password is incorrect.')
      }
    } catch(e){
      window.alert('Username does not exist.')
      return
    }
  }

  checkReady = function(){
    if(this.state.user1==='yes'&&this.state.user2==='yes'){
      window.location.href = `/user1/${this.state.usernameOne}/user2/${this.state.usernameTwo}`
    }
  }

  render() {
    const {usernameOne,
      passwordOne,
      usernameTwo,
      passwordTwo,
      backgroundColor1,
      backgroundColor2,
      user1,
      user2} = this.state
    const myStyle = {
      color: "#E6E6FA",
    }
    const floatChild1 = {
      width: "50%",
      float: "left",
      padding: "0px",
      backgroundColor: this.state.backgroundColor1
    }
    const floatChild2 = {
      width: "50%",
      float: "left",
      padding: "0px",
      backgroundColor: this.state.backgroundColor2
    }
    return (
      <div>
        <title>TIC-TAC-TOE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // <link rel="stylesheet" href="assets/css/main.css" />
        {/* Wrapper */}
        <div id="wrapper">
          {/* Header */}
          <header id="header">
            <h1><strong>TIC-TAC-TOE</strong></h1>
          </header>
          {/* Main */}
          <section id="main">
            {/* Section1 */}
            <section style={floatChild1} id='section1'>
              <form>
                <p>
                  <label>Username</label>
                  <input type="text" name="username" id="username1" value={usernameOne} onChange={this.handleChangeInputUsername1}/>
                </p>
                <p>
                  <label>Password</label>
                  <input type="password" name="password" id="password1" value={passwordOne} onChange={this.handleChangeInputPassword1}/>
                </p>
                <br />
                <center>
                  <input type="submit" defaultValue="Login" id="auth1" onClick={this.handleSubmit1}/>
                </center>
              </form>
            </section>
            {/* Section2 */}
            <section style={floatChild2} id='section2'>
              <form>
                <p>
                  <label>Username</label>
                  <input type="text" name="username" id="username2" value={usernameTwo} onChange={this.handleChangeInputUsername2}/>
                </p>
                <p>
                  <label>Password</label>
                  <input type="password" name="password" id="password2" value={passwordTwo} onChange={this.handleChangeInputPassword2}/>
                </p>
                <br />
                <center>
                  <input type="submit" defaultValue="Login" id="auth2" onClick={this.handleSubmit2}/>
                </center>
              </form>
              
            </section>
          </section>
          {/* Footer */}
          <footer id="footer">
              <p style={myStyle}>
                New player? <a href="/signUp">Create account</a><br />
              </p>            
              <p style={myStyle}>Web Technologies Mini-project 2020</p>
          </footer>
        </div>
        {/* Scripts */}
      </div>
    );
  }
}

export default Login;