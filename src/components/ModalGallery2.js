import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalGallery2.scss';

library.add(fas, fab, far);

class ModalGallery2 extends Component {
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
    const { dataPage } = this.props;

    document.querySelector('.footer').classList.add('dNone');
    document.querySelector('.menuContent').classList.add('dNone');

    dataPage.multimedia.gallery.length === 1 ? this.props.isEnded(true) : console.log('Hay más de un elemento');
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    document.querySelector('.menuContent').classList.remove('dNone');
    this.props.showModal();
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'ModalGallery2 animated fadeIn d-Flex j-C aI-C'>
        <div className = 'showModal'>
          <div className = 'itemGallery d-Flex j-C aI-C'>
            {
              dataPage.multimedia.gallery.length > 1 ?
              <button className = { 'buttonSlide mR-3 ' + (this.state.slide === 1 ? 'disabled' : 'pulse') } id = 'btnAnt' onClick = { this.mSlides }>
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="arrow-left" inverse transform="shrink-6" />
                </span>
              </button> : null
            }
            {
              dataPage.multimedia.gallery.map(item => {
                return(
                  item.link ? 
                  <a href = { item.link } target = '_blank' rel='noopener noreferrer'>
                    <img alt = 'Imagen' className = { 'imgGallery c-10 ' + (item.key !== 1 ? 'dNone': '') } id = { 'imgGal-' + item.key } key = { item.key} src = { item.img }/>
                  </a> : 
                  <img alt = 'Imagen' className = { 'imgGallery c-10 ' + (item.key !== 1 ? 'dNone': '') } id = { 'imgGal-' + item.key } key = { item.key} src = { item.img }/>
                );
              })
            }
            {
              dataPage.multimedia.gallery.length > 1 ?
              <button className = { 'buttonSlide mL-3 ' + (this.state.slide === dataPage.multimedia.gallery.length ? 'disabled' : 'pulse') } id = 'btnSig' onClick = { this.mSlides }>
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="arrow-right" inverse transform="shrink-6" />
                </span>
              </button> : null
            }
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

export default ModalGallery2;
