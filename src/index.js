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
    this.handleAudioIdUpdate = this.handleAudioIdUpdate.bind(this);
  }

  handleAudioIdUpdate(audioId) {
    this.setState({ currentAudioId: audioId });
  }

  render() {
    return (
      <div id="drum-machine">
        <Display currentAudioId={this.state.currentAudioId} />
        <DrumPad
          audioBank={this.state.audioBank}
          onAudioIdUpdate={this.handleAudioIdUpdate}
        />
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
  constructor(props) {
    super(props);
    this.handleAudioIdUpdate = this.handleAudioIdUpdate.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    const audioBank = this.props.audioBank;
    this.createKeyPressListeners(audioBank);
  }

  componentWillUnmount() {
    const audioBank = this.props.audioBank;
    this.removeKeyPressListeners(audioBank);
  }

  createKeyPressListeners(audioBank) {
    audioBank.forEach(element => {
      const play = this.playSound(element.id, element.keyTrigger);
      document.addEventListener('keydown', event => {
        if (event.keyCode === element.keyCode) {
          play();
        }
      });
    });
  }

  removeKeyPressListeners(audioBank) {
    audioBank.forEach(element => {
      const play = this.playSound(element.id, element.keyTrigger);
      document.removeEventListener('keydown', event => {
        if (event.keyCode === element.keyCode) {
          play();
        }
      });
    });
  }

  handleAudioIdUpdate(audioId) {
    this.props.onAudioIdUpdate(audioId);
  }

  playSound(audioId, keyTrigger) {
    return function() {
      this.handleAudioIdUpdate(audioId);
      const audioElement = document.getElementById(keyTrigger);
      audioElement.play();
    }.bind(this); // closures should be bound to the correct 'this'
  }

  createDrumPads(audioBank) {
    return audioBank.map(element => {
      const { keyTrigger, id, url } = element;

      return (
        <div
          id={id}
          className="drum-pad"
          onClick={this.playSound(id, keyTrigger)}
        >
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
