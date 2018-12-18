import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CroppedPhoto from './CroppedPhoto'
import shuffle from 'shuffle-array';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_num: 0
        }
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({input_num: e.target.value})
    }

  render() {
      let arr = [];
      const gridSize = this.state.input_num;
      const percentage = 100 / (gridSize - 1);

      for (let i=0; i<gridSize * gridSize; i++) {
          let current_tile = {
              xpos: (percentage * (i % gridSize)) + '%',
              ypos: (percentage * Math.floor(i / gridSize)) + '%',
          };
          arr.push(current_tile)
      }
      shuffle(arr);

    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
            {/*/!*<CroppedPhoto img_path="./image.jpg" startpx="100"/>*!/*/}

          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
          <img src="./image.jpg" width="1100" height="1100"/>
          <div>
          <input type="text" name="fname" onChange={e => this.handleInputChange(e)}/>
          {arr.map(tile => <CroppedPhoto img_path="./image.jpg" startpxX={tile.xpos} startpxY={tile.ypos} gridSize={gridSize}/>)}
          </div>
      </div>
    );
  }
}

export default App;
