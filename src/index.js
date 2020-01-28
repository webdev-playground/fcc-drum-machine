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
          <p>Q</p>
        </div>
        <div id="key2" className="drum-pad">
          <p>W</p>
        </div>
        <div id="key3" className="drum-pad">
          <p>E</p>
        </div>
        <div id="key4" className="drum-pad">
          <p>A</p>
        </div>
        <div id="key5" className="drum-pad">
          <p>S</p>
        </div>
        <div id="key6" className="drum-pad">
          <p>D</p>
        </div>
        <div id="key7" className="drum-pad">
          <p>Z</p>
        </div>
        <div id="key8" className="drum-pad">
          <p>X</p>
        </div>
        <div id="key9" className="drum-pad">
          <p>C</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
