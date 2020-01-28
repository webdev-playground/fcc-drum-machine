import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />
        <DrumPad />
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div id="display">Display</div>;
  }
}

class DrumPad extends React.Component {
  render() {
    return (
      <div id="pad-bank">
        <div id="key1" className="drum-pad">
          <audio id="Q" class="clip" src="#"></audio>
          <p>Q</p>
        </div>
        <div id="key2" className="drum-pad">
          <audio id="W" class="clip" src="#"></audio>
          <p>W</p>
        </div>
        <div id="key3" className="drum-pad">
          <audio id="E" class="clip" src="#"></audio>
          <p>E</p>
        </div>
        <div id="key4" className="drum-pad">
          <audio id="A" class="clip" src="#"></audio>
          <p>A</p>
        </div>
        <div id="key5" className="drum-pad">
          <audio id="S" class="clip" src="#"></audio>
          <p>S</p>
        </div>
        <div id="key6" className="drum-pad">
          <audio id="D" class="clip" src="#"></audio>
          <p>D</p>
        </div>
        <div id="key7" className="drum-pad">
          <audio id="Z" class="clip" src="#"></audio>
          <p>Z</p>
        </div>
        <div id="key8" className="drum-pad">
          <audio id="X" class="clip" src="#"></audio>
          <p>X</p>
        </div>
        <div id="key9" className="drum-pad">
          <audio id="C" class="clip" src="#"></audio>
          <p>C</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
