import React, { Component } from 'react';
import Square from './Square';


var divStyle = {
    "margin": "225px",
    "margin-left": "530px"
}

class Board extends Component {
    renderSquare(i, style){
        return <Square style={style} value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div style={divStyle}>
                <div className="border-row">
                    {this.renderSquare(0,{"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"})}
                    {this.renderSquare(1, {"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"})}
                    {this.renderSquare(2, {"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"rgb(122,40,103)", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"})}
                </div>
                <div className="border-row">
                    {this.renderSquare(3,{"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"} )}
                    {this.renderSquare(4,{"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"})}
                    {this.renderSquare(5,{"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"rgb(122,40,103)", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"})}
                </div>
                <div className="border-row">
                    {this.renderSquare(6, {"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"rgb(122,40,103)"})}
                    {this.renderSquare(7, {"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"rgb(122,40,103)"})}
                    {this.renderSquare(8, {"background-color": "rgb(122,40,103)","border": "solid 0.3em gold" ,"border-right-color":"rgb(122,40,103)", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"rgb(122,40,103)"})}
                </div>
                
            </div>
        )
    }
}

export default Board;