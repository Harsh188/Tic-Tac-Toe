import React, {Component} from 'react'
import api from '../api'
import '../style/css/main.css'

class SignUp extends Component{
	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: '',
			passwordCheck: '',
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

	handleChangeInputPasswordCheck = async event => {
		const passwordCheck = event.target.value
		this.setState({passwordCheck})
	}

	handleSubmit = async event =>{
		event.preventDefault()
		console.log(this.state.username+' '+this.state.password+' '+this.state.passwordCheck)
		if(this.state.username===''){
			window.alert("Invalid Username")
			return
		}
		else if(this.state.password===''){
			window.alert("Invalid Password")
			return
		}
		else if(this.state.password!==this.state.passwordCheck){
			window.alert("Passwords don't match")
			return
		}
		const username = this.state.username
		const password = this.state.password
		const wins =0
		const losses =0
		const ratio=0
		const total = 0
		const rank = -1
		const payload = {
			username,
			password,
		    wins,
		    losses,
		    ratio,
		    total,
		    rank,
		}

		try{
			await api.insertUser(payload).then(res =>{
				window.alert('User created successfully')
				window.location.href = `/`
			})
		} catch(e){
			window.alert('Unable to create user')
		}
	}
	render(){
		const {username, password} = this.state
		const myStyle = {
		  color: "#E6E6FA",
		}
		return(
		<div>
	        <title>TIC-TAC-TOE</title>
	        <meta charSet="utf-8" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
	        <link rel="stylesheet" href="assets/css/main.css" />
	        {/* Wrapper */}
	        <div id="wrapper">
	          {/* Header */}
	          <header id="header">
	            <h1><strong>Sign Up</strong></h1>
	          </header>
	          {/* Main */}
	          <section id="main">
	            <form>
	              <p>
	                <label>Enter Username</label>
	                <input type="text" name="username" id="username" value={username} onChange={this.handleChangeInputUsername}/>
	              </p>
	              <p>
	                <label>Enter Password</label>
	                <input type="password" name="password" id="password" value={password} onChange={this.handleChangeInputPassword}/>
	              </p>
	              <p>
	                <label>Re-Enter Password</label>
	                <input type="password" name="password" id="passwordCheck" onChange={this.handleChangeInputPasswordCheck}/>
	              </p>
	              <br />
	              <center>
	                <input type="submit" defaultValue="Login" id="auth" onClick={this.handleSubmit}/>
	              </center>
	            </form>
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
export default SignUp;