import React, {Component} from 'react';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath5.scss';

library.add(fas, fab, far);

class InteractivePath5 extends Component {
  state = {
    actualItem: 0,
    countItem: 0,
    openGlobe: false
  }

  trackScrolling = (e) => {
    e.preventDefault();
    const CONTENTBOX = document.getElementById('scrollContent');
    if (e.currentTarget.id === 'btnLeft') {
      CONTENTBOX.scrollLeft = CONTENTBOX.scrollLeft - 300;
    }
    if (e.currentTarget.id === 'btnRight') {
      CONTENTBOX.scrollLeft = CONTENTBOX.scrollLeft + 300;
    }
  }

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.multimedia.map( (item, i) => {
      return(
        <div className = 'circleItems mR-1 mL-1' key = { i } >
          <button className = { 'circleButton ' + ( i !== 0 ? 'disabledGray' : '')} id = { i } onClick = { this.enableItem } style = {{ 'backgroundColor': item.itemInfo.color }}>
            <h1 className = 'blanco F3 tCenter' >0{ i + 1 }</h1>
          </button>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimedia } = this.props.dataPage;
    e.preventDefault();
    const CONTENTBOX = document.getElementById('scrollContent');
    const IDITEM = e.currentTarget.id;
    let idItem = parseInt(IDITEM);

    this.setState({ actualItem : idItem });

    if (idItem < multimedia.length - 1 && this.state.countItem < multimedia.length - 1) {

      console.log('Menor');

      console.log(this.state.countItem);

      let nextItem = document.getElementById(idItem + 1);
      nextItem.classList.remove('disabledGray');
      
      this.setState({ countItem: this.state.countItem + 1 });

      if (this.state.countItem > 2) {
        CONTENTBOX.scrollLeft = CONTENTBOX.scrollLeft + 300;
      }
    } else {
      
      this.setState({ countItem: this.state.countItem + 1 });
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }

    if (this.state.countItem === multimedia.length - 1) {
      this.setState({ countItem: multimedia.length });
    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER style = {{ 'marginTop': 40, 'marginLeft': -480 }}
  hideModal = () => { this.showGlobe(); }

  // style = { { 'top': item.pos.top, 'left': item.pos.left } }

  render() {
    const { multimedia } = this.props.dataPage;
    const { actualItem } = this.state;

    return (
      <div className = 'InteractivePath5 d-Flex d-C j-S aI-S' style = {{ }}>

        <div className = 'trackContent d-Flex j-C aI-S'>
          <button
            className = { 'buttonNav mT-3'}
            id = 'btnLeft'
            onClick = { this.trackScrolling }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-left'] }
              size = 'lg' />
          </button>

          <div className = 'scrollContent d-Flex j-S aI-S mL-1 mR-1' id = 'scrollContent'>
            { this.showItems() }

            {
              // MOSTRAR LOS GLOBOS DE TEXTO
              this.state.openGlobe !== false ?
              <div className = 'bgItemGlobe'>
                <div
                  className = { 'itemGlobe dF-C-cc animated fadeInDown ' + multimedia[actualItem].itemInfo.trian } style = {{ 'borderColor': multimedia[actualItem].itemInfo.color, 'top': multimedia[actualItem].itemInfo.posGlobe.posY, 'left': multimedia[actualItem].itemInfo.posGlobe.posX }}>

                  {
                    multimedia[actualItem].itemInfo.title ? <h4 className = 'mB-05' dangerouslySetInnerHTML = {{ __html: multimedia[actualItem].itemInfo.title }}></h4> : null
                  }

                  {
                    multimedia[actualItem].itemInfo.text ? <p className = 'tCenter' dangerouslySetInnerHTML = {{ __html: multimedia[actualItem].itemInfo.text }}></p> : null
                  }

                  <button
                    className = 'buttonClose'
                    onClick = { this.hideModal }
                    >
                    <span className = 'fa-layers fa-fw iconButton' >
                      <FontAwesomeIcon icon="circle" />
                      <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                    </span>
                    </button>
                </div>
              </div> : null
            }
          </div>

          <button
            className = { 'buttonNav mT-3' }
            id = 'btnRight'
            onClick = { this.trackScrolling }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-right'] }
              size = 'lg' />
          </button>
        </div>

      </div>
    );
  }
}

export default InteractivePath5;
