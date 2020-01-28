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
    return <div id="pad-bank">Pads</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
