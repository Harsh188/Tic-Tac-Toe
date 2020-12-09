import React, {Component} from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import '../style/css/main.css'

import 'react-table-6/react-table.css'

class Leaderboard extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    users: Array(),
	    columns: [],
	    isLoading: false,
	  }
	}

	componentDidMount = async ()=>{
		this.setState({isLoading: true})
		var huh = JSON.stringify(await api.getAllUsers())
		huh = JSON.parse(huh).data
		// console.log(huh)
		this.setState({
			users: huh,
			isLoading: false,
		})
		// console.log(this.state.users)
	}

    render() {
    	const {users, isLoading} = this.state
		// console.log(users)
		for (var x of users){
			// console.log(x)
		}
		// console.log(isLoading)
        const columns = [
            {
                Header: 'Username',
                accessor: 'username',
            },
            {
                Header: 'Wins',
                accessor: 'wins',
            },
            {
                Header: 'Losses',
                accessor: 'losses',
            },
            {
                Header: 'Ratio',
                accessor: 'ratio',
            },
            {
                Header: 'Total',
                accessor: 'total',
            },
        ]

        let showTable = true
        if (users && !users.length) {
            showTable = false
        }

        const divStyle = {
        	padding: "0 40px 40px 40px",
        	backgroundColor: "rgba(48,25,52,0.75)",
            color: "white",
            borderColor: "white",
        }
        const myStyle = {
            borderColor: "white"
        }
        return (
			// <h1>hsdfas</h1>
			<div style={divStyle}>
				<div><center>
					<h3>Leaderboard</h3>
				</center></div>
                {showTable && (
                    <ReactTable
                        data={users}
                        columns={columns}
                        loading={isLoading}
                        showPageSizeOptions={false}
                        minRows={0}
                        showPageJump={false}
                        showPagination={false}
                        style={myStyle}
                    />
                )}
	        </div>
        )
    }
}

export default Leaderboard;