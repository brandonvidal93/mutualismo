import React, { Component } from 'react';
import ItemInteractiveAudio from './ItemInteractiveAudio';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveAudio1.scss';

library.add(fas, fab, far);

class InteractiveAudio1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
      mute: false,
      ended: false,
      time: 0,
      subTitle: ''
    };
  }

  componentWillReceiveProps() {
    this.setState({ play: false, time: this.audio.currentTime });
  }

  componentDidMount() {
    const { dataPage } = this.props;
    this.audio.addEventListener("timeupdate", () => {

      if (this.audio !== null) {
        let time = this.audio.currentTime;
        if (time !== this.state.time) { this.setState({ time: Math.round(time) }); }

        let timeString = String(Math.round(time));

        if (dataPage.subtitles.hasOwnProperty(timeString)) {
          let label = dataPage.subtitles[String(Math.round(time))];
          this.setState({ subTitle: label });
        }
      }
    });

    this.audio.addEventListener("ended", () =>  {
        this.setState({ play: false, ended: true })
        this.props.isEnded(true);
    });
  }

  // DESMONTAR EL COMPONENTE
  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }

  _play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  }

  _mute = () => {
    if (this.state.mute) {
      this.setState({ mute: false });
      this.audio.muted = false;
    } else {
      this.setState({ mute: true });
      this.audio.muted = true;
    }
  }

  _redo = () => {
    if (!this.state.play) {
      this.setState({ play: true, ended: false });
      this.audio.play();
    }
  }

  makeItems = () => {
    return (
      <ItemInteractiveAudio dataItem = { this.props.dataPage.layers } time = { this.state.time } movePage = { this.props.dataPage.movePage } moveTime = { this.props.dataPage.moveTime }/>
    )
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'InteractiveAudio1'>
        <audio
          autoPlay = { dataPage.audio.autoPlay }
          id = 'audioReference'
          src = { dataPage.audio.src }
          ref = { (audio) => { this.audio = audio } } />

        <div className = { dataPage.idMult === 17 ? 'areaItems-2' : 'areaItems'}>
          { //areaItems
            this.makeItems()
          }
        </div>

        <div className = 'playerBox dF-R-sc'>

          <div className = 'buttonBox dF-R-cc'>
            { this.state.ended !== true ?
              <button className = 'buttonPlayer' id = 'btnPlayPause' onClick = { this._play }>
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  {
                    !this.state.play ?
                    <FontAwesomeIcon icon="play" inverse transform="shrink-8" /> :
                    <FontAwesomeIcon icon="pause" inverse transform="shrink-8" />
                  }
                </span>
              </button>
              :
              <button className = 'buttonPlayer' id = 'btnRedo' onClick = { this._redo }>
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="redo-alt" inverse transform="shrink-8" />
                </span>
              </button>
            }
            <button className = 'buttonPlayer' id = 'btnMute' onClick = { this._mute }>
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                {
                  !this.state.mute ?
                  <FontAwesomeIcon icon='volume-up' inverse transform="shrink-8" /> :
                  <FontAwesomeIcon icon='volume-mute' inverse transform="shrink-8" />
                }
              </span>
            </button>
          </div>

          <div className = 'trackLabelBox'>
            <div className = 'labelBox pT-05 pB-05 pL-05 pR-05'>
              <p className = 'subtitle'>{ this.state.subTitle  }</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default InteractiveAudio1;
