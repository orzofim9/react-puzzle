import React, { Component } from 'react';
import './App.css'

class CroppedPhoto extends Component {

    render() {
        const puzzle_style = {
            backgroundImage: "url(" + this.props.img_path + ")",
            width: 800/this.props.gridSize,
            height: 800/this.props.gridSize,
            backgroundPosition: this.props.startpxX + " " + this.props.startpxY,
            backgroundSize: (this.props.gridSize * 100) + "%"
        };
        return (
            <div style={puzzle_style}>

            </div>
        );
    }
}

export default CroppedPhoto;
