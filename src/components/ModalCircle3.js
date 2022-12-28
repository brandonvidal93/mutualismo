import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalCircle3.scss';

library.add(fas, fab, far);

class ModalCircle3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  showItems = () => {
    const { dataPage, imageArray } = this.props;
    const ITEM = dataPage.multimedia.map( (item, i) => {
      return(
        <div className = 'circleItems pAbs' key = { i } style = {{ 'top': item.posY, 'left': item.posX }}>
          <div className = 'd-Flex d-R j-C aI-C itemButton'>
            <button 
              className = { 'circleButton ' + ( i + 1 !== 1 ? 'disabledGray' : '')} 
              id = { i + 1 } 
              onClick = { this.enableItem } >

              <img alt = '' className = '' id = { i + 1 } src = { imageArray[i] }/>
            </button>
          </div>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimedia } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.target.id;
    let idItem = parseInt(IDITEM);
    console.log(idItem);

    document.getElementById(idItem).classList.add('visited');

    if (idItem <= multimedia.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });
        if (idItem !== multimedia.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabledGray');
          // document.getElementById('title-' + (idItem + 1)).classList.remove('disabledGray');
          this.setState({ countItem: this.state.countItem + 1 });
        } else {
          this.setState({ countItem: this.state.countItem + 1 });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }
    }

    if (this.state.countItem === multimedia.length) {
      this.setState({ countItem: multimedia.length });
    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });

    document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.add('dNone'); // OCULTAR EL FONDO
    document.querySelector('.instruction').classList.add('dNone'); // OCULTAR EL FONDO
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER style = {{ 'marginTop': 40, 'marginLeft': -480 }}
  hideModal = () => { 
    this.setState({
      openGlobe: !this.state.openGlobe
    });

    document.querySelector('.footer').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.instruction').classList.remove('dNone'); // OCULTAR EL FONDO
  }

  render() {
    const { multimedia } = this.props.dataPage;
    const { actualItem } = this.state;
    const { background, imageArray } = this.props;
    const style = {
      'backgroundImage': 'url(' + background + ')',
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center'
    }
    // console.log(this.state.countItem);
    return (
      <div className = 'ModalCircle3 d-Flex d-C' style =  {{ ...style }}>
        {
          // MOSTRAR LOS GLOBOS DE TEXTO
          this.state.openGlobe !== false ?
          <div className = 'bgItemGlobe animated fadeIn'>
            <div className = { 'itemGlobe animated fadeIn d-Flex d-C j-C aI-C'} >

              <img alt = '' className = 'mB-1' src = { imageArray[actualItem - 1] }/>

              {/* <h2 className = 'mB-1 titleGlobe tCenter blanco d-Flex j-C aI-C' style = {{ 'backgroundColor': multimedia[actualItem - 1].itemInfo.colorText }}>{ multimedia[actualItem - 1].itemInfo.title }</h2> */}

              <p className = 'mB-05 tCenter c-75' dangerouslySetInnerHTML = { { __html: multimedia[actualItem - 1].itemInfo.text1 } } />

              { 
                multimedia[actualItem - 1].itemInfo.buttonClose.closedModal === true ?
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
          </div> : null
        }

        { this.showItems() }
      </div>
    );
  }
}

export default ModalCircle3;