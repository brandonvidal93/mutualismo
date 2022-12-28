import React, {Component} from 'react';

// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './SlideDot1.scss';

// library.add(fas, fab, far);

class SlideDot1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0
    }
  }

  // MOSTRAR ITEM
  showItem = e => {
    const { multimedia } = this.props.dataPage;
    const { isEnded } = this.props;

    e.preventDefault();

    let numId = parseInt(e.target.id.substring(8));

    this.setState({
      item: numId
    });

    if (this.state.item >= multimedia.length - 2) {
      isEnded(true);
    }
  }

  render() {
    const { multimedia } = this.props.dataPage;

    return (
      <div className = 'SlideDot1 d-Flex d-C j-C aI-C' style = {{ 'backgroundImage': 'url(' + multimedia[this.state.item].bg + ')', 'backgroundPositionY': multimedia[this.state.item].bgPosY, 'backgroundPositionX': multimedia[this.state.item].bgPosX }}>
        <div className = 'dotContent d-Flex d-C j-C aI-C mB-1' style = {{ 'borderColor' : multimedia[this.state.item].color }} >         
          {
            multimedia.map((item, i) => {
              return(
                <div
                  className = { 'd-Flex d-C j-C aI-C animated fadeIn ' + (this.state.item === i ? '' : 'dNone') }
                  key = { i }>
                  {
                    item.img1 ? <img
                      alt = 'Imagen'
                      className = 'mB-1'
                      src = { item.img1 }/> : null
                  }
                  {
                    item.text1 ? <p className = 'tCenter mB-025' dangerouslySetInnerHTML = {{ __html: item.text1 }}></p> : null
                  }
                  {
                    item.img2 ? <img
                      alt = 'Imagen'
                      className = 'mB-025'
                      src = { item.img2 }/> : null
                  }
                </div>
              )
            })
          }
        </div>
        <div className = 'buttonBox d-Flex j-C aI-C'>
          {
            multimedia.map((button, i) => {
              return(
                <div
                  className = { 'btnItem ' + (this.state.item === i ? 'btnActive': '') }
                  id = { 'btnItem-' + i }
                  key = { i }
                  onClick = { this.showItem } >
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SlideDot1;
