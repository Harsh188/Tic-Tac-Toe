import React, { Component } from 'react';
import Square from './Square';


var divStyle = {
    "margin-left": "-35px",
    "margin-top": "125px"
}

class Board extends Component {
    combineStyle(commonButtonStyle, customStyle){
        const merged = Object.assign({},commonButtonStyle, customStyle)
        return merged
    }
    renderSquare(i, style){
        // console.log(style)
        return <Square style={style} value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        const commonButtonStyle = {
            "background-color": "rgb(122,40,103)",
            "border": "solid 0.1em",
            "fontSize": "30px"
        }
        return (
            <div style={divStyle}>
                <div className="border-row">
                    {this.renderSquare(0, this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"}))}
                    {this.renderSquare(1, this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"black", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"}))}
                    {this.renderSquare(2, this.combineStyle(commonButtonStyle, {"border-right-color":"rgb(122,40,103)", "border-left-color":"black", "border-top-color":"rgb(122,40,103)", "border-bottom-color":"black"}))}
                </div>
                <div className="border-row">
                    {this.renderSquare(3,this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"black", "border-bottom-color":"black"}))}
                    {this.renderSquare(4,this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"black", "border-top-color":"black", "border-bottom-color":"black"}))}
                    {this.renderSquare(5,this.combineStyle(commonButtonStyle, {"border-right-color":"rgb(122,40,103)", "border-left-color":"black", "border-top-color":"black", "border-bottom-color":"black"}))}
                </div>
                <div className="border-row">
                    {this.renderSquare(6, this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"rgb(122,40,103)", "border-top-color":"black", "border-bottom-color":"rgb(122,40,103)"}))}
                    {this.renderSquare(7, this.combineStyle(commonButtonStyle, {"border-right-color":"black", "border-left-color":"black", "border-top-color":"black", "border-bottom-color":"rgb(122,40,103)"}))}
                    {this.renderSquare(8, this.combineStyle(commonButtonStyle, {"border-right-color":"rgb(122,40,103)", "border-left-color":"black", "border-top-color":"black", "border-bottom-color":"rgb(122,40,103)"}))}
                </div>
                
            </div>
        )
    }
}

export default Board;