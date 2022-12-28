import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalVideo1.scss';

library.add(fas, fab, far);

class ModalVideo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ended: false,
      time: 0
    }
  }

  componentWillReceiveProps() {
    this.setState({ time: this.video.currentTime });
  }

  componentDidMount() {
    this.video.addEventListener("timeupdate", () => {

      if (this.video !== null) {
        let time = this.video.currentTime;
        if (time !== this.state.time) { this.setState({ time: Math.round(time) }); }
      }
    });

    this.video.addEventListener("ended", () =>  {
        this.setState({ ended: true })
        // console.log(this.state.ended);
        this.props.isEnded(true);
    });

    document.querySelector('.footer').classList.add('dNone');
    document.querySelector('.menuContent').classList.add('dNone');
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    document.querySelector('.menuContent').classList.remove('dNone');
    this.props.showModal();
  }

  render() {
    const { dataModal } = this.props;
    return (
      <div className = 'ModalVideo1 animated fadeIn'>
        <div className = 'showModal'>
          <video
            allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls
            autoPlay
            className = 'iframeVideo'
            frameBorder = "0"
            height = "315"
            src = { dataModal.modal.urlVideo }
            title = ''
            width = "560"
            ref = { (video) => { this.video = video } } />

          { dataModal.modal.closedModal === true ?
            <button
              className = 'buttonClose'
              onClick = { this.hideModal }
              >
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
              </span>
            </button> : null
          }
        </div>
      </div>
    );
  }
}

export default ModalVideo1;
