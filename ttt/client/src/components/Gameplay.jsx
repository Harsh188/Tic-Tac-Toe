import React, {Component} from 'react'
import '../style/css/gameplay.css'

class Gameplay extends Component{
    render(){
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                {/* <link rel="stylesheet" href="styles.css" /> */}
                <title>Document</title>
                <div className="board" id="board">
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                    <div className="cell" data-cell />
                </div>
                <div className="winning-message" id="winningMessage">
                    <div data-winning-message-text />
                    <button id="restartButton">Restart</button>
                </div>
            </div>
        );
    }
};

export default Gameplay;