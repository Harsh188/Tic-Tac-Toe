import React, {Component} from 'react'
import ReactTable from 'react-table'
import api from '../api'

import '../style/css/main.css'
import styled from 'styled-components'

// import 'react-table/react-table.css'

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`

class Leaderboard extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    users: [],
	    columns: [],
	    isLoading: false,
	  }
	}

	componentDidMount = async ()=>{
		this.setState({isLoading: true})
		// var users1 = [];
		// users1 = 
		// console.log(users1.data.length)
		// this.setState({
		// 	users: await api.getAllUsers(),
		// 	isLoading: false,
		// })
		// console.log(this.state.users.data.length+' '+this.state.isLoading)
	}

    render() {
    	const {users, isLoading} = this.state
        const columns = [
            {
                Header: 'Rank',
                accessor: 'rank',
                filterable: true,
            },
            {
                Header: 'Username',
                accessor: 'username',
                filterable: true,
            },
            {
                Header: 'Wins',
                accessor: 'wins',
                filterable: true,
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
        if (users&& !users.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={this.state.users.data}
                        columns={columns}
                        loading={this.state.isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default Leaderboard;