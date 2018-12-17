import React, {Component} from 'react';
import './App.scss';

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  // eslint-disable-next-line max-len
  return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
}

class App extends Component {
  state = { styleOne: {}, styleTwo: {} };

  onMove = (event) => {
    let posX;
    let posY;
    if (event.type === 'touchmove') {
      posX = event.touches[0].clientX;
      posY = event.touches[0].clientY;
    } else {
      posX = event.clientX;
      posY = event.clientY;
    }

    this.setState({
      styleOne: transform(posX / posY),
      styleTwo: transform(-posX / posY),
    })
  }

  render() {
    return <div className="panelWrapper"
      onMouseMove={this.onMove} onTouchMove={this.onMove}
    >
      <div className="panel"  style={this.state.styleOne} />
      <div className="panel"  style={this.state.styleTwo} />
      <div className="caption">
        <p>
          Based on <a href="https://codepen.io/sgrider/pen/yRWZEq">React
          Starter</a> by Stephen Grider.
        </p>
        <ul>
          <li>Fixed some bugs / typos.</li>
          <li>Improved mouse event handling.</li>
          <li>Added touch event handling.</li>
        </ul>
      </div>
    </div>  
  }
}

export default App;
