import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const audioBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioBank: audioBank,
      currentAudioId: 'Chord-1',
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <Display currentAudioId={this.state.currentAudioId} />
        <DrumPad audioBank={this.state.audioBank} />
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    const currentAudioId = this.props.currentAudioId;

    return (
      <div id="display">
        <h1>{currentAudioId}</h1>
      </div>
    );
  }
}

class DrumPad extends React.Component {
  playSound(audioId) {
    return function() {
      const audioElement = document.getElementById(audioId);
      audioElement.play();
    };
  }

  createDrumPads(audioBank) {
    return audioBank.map(element => {
      const { keyCode, keyTrigger, id, url } = element; // keyCode still unused

      return (
        <div id={id} className="drum-pad" onClick={this.playSound(keyTrigger)}>
          <audio id={keyTrigger} class="clip" src={url}></audio>
          <p>{keyTrigger}</p>
        </div>
      );
    });
  }

  render() {
    const audioBank = this.props.audioBank;
    const drumPads = this.createDrumPads(audioBank);

    return <div id="pad-bank">{drumPads}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
