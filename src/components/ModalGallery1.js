import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalGallery1.scss';

library.add(fas, fab, far);

class ModalGallery1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 1
    }
  }

  mSlides = e => {
    const { dataPage } = this.props;

    // RECORRER TODOS LOS ELEMENTOS DE UNA CLASE
    for (let i = 0; i < dataPage.multimedia.gallery.length; i++) {
      document.getElementsByClassName('imgGallery')[i].classList.add('dNone');
      // document.getElementsByClassName('itemsNav')[i].classList.remove('active');
    }

    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        slide: this.state.slide - 1
      });

      document.getElementById('imgGal-' + (this.state.slide - 1)).classList.remove('dNone');
      // document.getElementById('imgNav-' + (this.state.slide - 1)).classList.add('active');
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        slide: this.state.slide + 1
      });

      document.getElementById('imgGal-' + (this.state.slide + 1)).classList.remove('dNone');
      // document.getElementById('imgNav-' + (this.state.slide + 1)).classList.add('active');

      if (this.state.slide === dataPage.multimedia.gallery.length - 1) {
        this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
      }
    }
  }

  componentDidMount() {
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
    const { dataPage, arrayImage } = this.props;
    return (
      <div className = 'ModalGallery1 animated fadeIn'>
        <div className = 'showModal'>
          <div className = 'itemGallery mB-1 d-Flex j-C aI-C'>
            {
              dataPage.multimedia.gallery.map((item, i) => {
                return(
                  <img alt = 'Imagen' className = { 'imgGallery c-10 ' + (item.key !== 1 ? 'dNone': '') } id = { 'imgGal-' + item.key } key = { item.key} src = { arrayImage[i] }/>
                );
              })
            }
          </div>

          <div className = 'navigationGallery d-Flex j-Ar aI-C'>
            <button className = { 'buttonSlide mB-025 ' + (this.state.slide === 1 ? 'disabled' : 'pulse') } id = 'btnAnt' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="arrow-left" inverse transform="shrink-6" />
              </span>
            </button>

            {/* <div className = 'c-75 d-Flex j-Bt aI-C'>
              {
                dataPage.multimedia.gallery.map(item => {
                  return(
                    <div className = { 'itemsNav d-Flex j-C aI-C ' + (item.key === 1 ? 'active': '') } id = { 'imgNav-' + item.key } key = { item.key}>
                      <img alt = 'Imagen' className = 'c-10' src = { item.img }/>
                    </div>
                  );
                })
              }
            </div> */}

            <button className = { 'buttonSlide mT-025 ' + (this.state.slide === dataPage.multimedia.gallery.length ? 'disabled' : 'pulse') } id = 'btnSig' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="arrow-right" inverse transform="shrink-6" />
              </span>
            </button>
          </div>

          { dataPage.multimedia.closedModal === true ?
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

export default ModalGallery1;
