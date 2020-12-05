import { strikethrough } from 'chalk';
import { Color } from 'chalk';
import React, { Component } from 'react'
import Board from './Board';
import LeaderBoard from './LeaderBoard'
import api from '../api'


var headStyle_a = {
    "color": "white",
    "margin-right": "700px",
}

var headStyle_b = {
    "color": "white",
    "margin-left": "700px"
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],
            user1: '',
            user2: '',
        }
    }

    componentDidMount() {
        var url = window.location.href;
        console.log(url)
        var n = url.indexOf("user1")
        var n1 = url.indexOf("user2")
        console.log(n+" "+n1)

        var user1 = url.slice(n+6, n1-1)
        var user2 = url.slice(n1+6)
        // console.log(user1+' '+user2)

        this.setState({ user1 });
        this.setState({ user2 });
    }


    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            //const desc = move ? 'Go to #' + move : 'Start the Game';
            // return (
            //     <li key={move}>
            //         <button onClick={() => { this.jumpTo(move) }}>
            //             {desc}
            //         </button>
            //     </li>
            // )
        });
        let status;
        if (winner) {
            status = winner + ' Wins!';
            api.updateUser({
                username:
            })
        } else {
            status = 'Player ' + (this.state.xIsNext ? 'X' : 'O') + "'s turn";
        }


        return (
            <div className="game" id="wrapper">
                <center>
                    <div><h1 style={headStyle_a}>{ this.state.user1} <br/> X </h1></div>
                <div className="game-board" >
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                    </div>
                <div><h1 style={headStyle_b}>{ this.state.user2}<br/>O</h1></div>

            </center>
            <LeaderBoard/>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default Game;