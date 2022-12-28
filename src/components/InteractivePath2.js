import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath2.scss';

library.add(fas, fab, far);

class InteractivePath2 extends Component {
  state = {
    countItem: 1
  }

  showInfo = e => {
    const { dataPage } = this.props;

    e.preventDefault();

    let idItem = e.currentTarget.id.substring(4);

    this.setState({
      countItem: this.state.countItem + 1
    });

    console.log(this.state.countItem);

    if (this.state.countItem < dataPage.items.length) {
      document.getElementById('info-' + idItem).classList.remove('dNone');
      document.getElementById('int-' + idItem).classList.add('dNone');

      if (this.state.countItem !== dataPage.items.length) {
        document.getElementById('btn-' + (parseInt(idItem) + 1)).classList.remove('btnDisabled');
      }
    } else {
      document.getElementById('info-' + idItem).classList.remove('dNone');
      document.getElementById('int-' + idItem).classList.add('dNone');
      this.props.isEnded(true);
    }
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = 'interactivePath2 d-Flex j-S aI-C'>
        {
          dataPage.items.map((item, i) => {
            return(
              <div className = 'boxInfo d-Flex j-C aI-C' key = { i } style = {{ 'width': item.width, 'backgroundImage': 'url(' + item.imgBg + ')' }} >
                <div id = {'int-' + i}>
                  <h1 className = 'tCenter fw-4 F4-5 color-5'>?</h1>
                </div> 
                <div className = { 'info pL-1 pR-1 d-Flex d-C j-C aI-C animated fadeIn dNone'} id = { 'info-' + i }>
                  {
                    item.img ? <img alt = 'Item' className = { 'imgItem c-10' } src = { item.img } /> : null
                  }
                  {
                    item.info ? <p className = 'tCenter' dangerouslySetInnerHTML = {{ __html: item.info }}></p> : null
                  }
                </div>

                <button className = { 'btnItem pAbs ' + (i !== 0 ? 'btnDisabled' : '') } id = { 'btn-' + i } onClick = { this.showInfo } style = { { 'top': item.button.posY, 'left': item.button.posX } } >
                  <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon className = 'circleIcon' icon="circle" style = {{ 'color': item.color }} />
                    <FontAwesomeIcon icon="chevron-right" inverse transform="shrink-6" />
                  </span>
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default InteractivePath2;