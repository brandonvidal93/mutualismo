import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath1.scss';

library.add(fas, fab, far);

class InteractivePath1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.multimedia.map( (item, i) => {
      return(
        <div className = 'circleItems' key = { i } style = { { 'top': item.pos.top, 'left': item.pos.left } }>
          <button className = { 'circleButton ' + ( i + 1 !== 1 ? 'disabledGray' : '')} id = { i + 1 } onClick = { this.enableItem }>
            <img alt = '' className = '' id = { i + 1 } src = { item.urlImgBtn }/>
          </button>
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
    console.log(e.target);

    document.getElementById(idItem).classList.add('visited');
    document.getElementById('itemGlobe-' + (idItem)).classList.remove('dNone');

    if (idItem <= multimedia.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });
        if (idItem !== multimedia.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabledGray');
          
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
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER style = {{ 'marginTop': 40, 'marginLeft': -480 }}
  hideModal = () => { this.showGlobe(); }

  render() {
    const { multimedia } = this.props.dataPage;

    const style = {
      backgroundImage: 'url(' + this.props.dataPage.background.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    // console.log(this.state.countItem);
    return (
      <div className = 'InteractivePath1 mL-7' style = {{ ...style }}>
        {
          multimedia.map((item, i) => {
            return(
              i % 2 !== 0 ?
              <div
              className = { 'c-15 itemGlobe animated fadeIn pAbs d-Flex d-C j-C aI-C dNone' }
              id = { 'itemGlobe-' + (i + 1) }
              key = { i }
              style = { { 'top': item.itemInfo.posGlobe.posY, 'left': item.itemInfo.posGlobe.posX, 'borderColor': item.itemInfo.colorBorder } }>
                <span className = 'fa-layers fa-fw mB-05' style = {{ 'fontSize': '2rem'}} >
                  <FontAwesomeIcon icon="circle" style = {{ 'color': '#F4F4F4'}}/>
                  <FontAwesomeIcon icon="circle" style = {{ 'color': item.itemInfo.color }} transform="shrink-6" />
                </span>
                {
                  item.itemInfo.title ? <h4 className = 'mB-05 fw-3 tCenter' dangerouslySetInnerHTML = {{ __html: item.itemInfo.title }}></h4> : null
                }
                {
                  item.itemInfo.text ? <p className = 'mB-05 fw-3 tCenter' dangerouslySetInnerHTML = {{ __html: item.itemInfo.text }}></p> : null
                }
              </div> :
              <div
              className = { 'c-15 itemGlobe animated fadeIn pAbs d-Flex d-C j-C aI-C dNone' }
              id = { 'itemGlobe-' + (i + 1) }
              key = { i }
              style = { { 'top': item.itemInfo.posGlobe.posY, 'left': item.itemInfo.posGlobe.posX, 'borderColor': item.itemInfo.colorBorder } }>
                {
                  item.itemInfo.title ? <h4 className = 'mB-05 fw-3 tCenter' dangerouslySetInnerHTML = {{ __html: item.itemInfo.title }}></h4> : null
                }
                {
                  item.itemInfo.text ? <p className = 'mB-05 fw-3 tCenter' dangerouslySetInnerHTML = {{ __html: item.itemInfo.text }}></p> : null
                }

                <span className = 'fa-layers fa-fw' style = {{ 'fontSize': '2rem'}} >
                  <FontAwesomeIcon icon="circle" style = {{ 'color': '#F4F4F4'}}/>
                  <FontAwesomeIcon icon="circle" style = {{ 'color': item.itemInfo.color }} transform="shrink-6" />
                </span>
              </div>
            );
          })
        }
        { this.showItems() }
      </div>
    );
  }
}

export default InteractivePath1;


