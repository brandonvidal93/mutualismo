import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveFlip2.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class InteractiveFlip2 extends Component {
  state = {
    count: 1
  }

  flip = e => {
    const { dataPage } = this.props;
    // console.log(e.currentTarget.classList);

    let idBtn = parseInt(e.currentTarget.id);

    // console.log(Object.values(dataPage)[idBtn - 1].text);

    e.currentTarget.classList.add('animated', 'flipOutY');

    // console.log(e.currentTarget.classList);

    this.setState({ count: this.state.count + 1 });

    if (this.state.count === dataPage.items.length) {
      this.props.isEnded(true);
    }

    this.flipShow(idBtn);
  }

  flipShow = (item) => {
    // console.log(document.getElementById('info-' + item));
    setTimeout(function(){
      document.getElementById('info-' + item).classList.remove('dNone');
      document.getElementById('info-' + item).classList.add('animated', 'flipInY');
    }, 800);
  }

  render() {
    const { dataPage } = this.props;

    switch (dataPage.type) {
      case 'icon':
        return (
          <div className = 'interactiveFlip2 mL-5'>
            {
              dataPage.items.map((item, i) => {
                return(
                  <div key = { item.id } className = { 'itemFlip' }>
                    <div className = { 'buttonFlip d-Flex d-C j-C aI-C flip-' + item.id } id = { item.id } onClick = { this.flip }>
                      {/* <img alt = 'Item' className = '' src = { imageArray[i] }/> */}
                      <h1 className = 'F3-5' >0{ item.id }</h1>
                      {/* <h3 className = 'tCenter mB-1' dangerouslySetInnerHTML = {{ __html: item.title }}></h3> */}
                    </div>

                    <div className = { 'infoFlip d-Flex d-C f-w ' + (item.id < 4 ? 'j-C' : 'j-C') + ' aI-C dNone flip-' + item.id } id = { 'info-' + item.id }>
                      {
                        // item.id < 4 ?
                        // <div className = 'd-Flex d-C j-C aI-C'>
                        //   <h1 className = 'blanco F3' >0{ item.id }</h1>
                        //   {/* <hr className = 'mB-05 line-5'></hr> */}
                        //   <h4 className = 'tCenter fw-3 blanco' dangerouslySetInnerHTML = {{ __html: item.title }}></h4>
                        // </div> :
                        // <div className = 'd-Flex d-C j-C aI-C c-95'>
                        //   <h1 className = 'blanco F3' >0{ item.id }</h1>
                        //   {/* <hr className = 'mB-05 line-5'></hr> */}
                        //   {/* <h4 className = 'tCenter fw-3 blanco pL-05' dangerouslySetInnerHTML = {{ __html: item.title }} style = {{ 'borderLeft': '1px solid #ffffff' }}></h4> */}
                        //   <h4 className = 'tCenter fw-3 blanco' dangerouslySetInnerHTML = {{ __html: item.title }}></h4>
                        // </div>
                        <div className = 'd-Flex d-C j-C aI-C'>
                          {/* <h1 className = 'blanco F3' >0{ item.id }</h1> */}
                          {/* <hr className = 'mB-05 line-5'></hr> */}
                          <h3 className = 'tCenter fw-3 blanco' dangerouslySetInnerHTML = {{ __html: item.title }}></h3>
                        </div>
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        );

      default:
        return (
          <div className = 'interactiveFlip'>
            {
              dataPage.items.map((item, i) => {
                return(
                  <div key = { item.id }>
                    <div className = 'buttonFlip dF-R-cc' id = { item.id } onClick = { this.flip }>
                      <span className = 'fa-layers fa-fw iconButton' >
                        <FontAwesomeIcon icon="circle" style={{ color: '#5C657C' }} />
                        <FontAwesomeIcon icon="plus" inverse transform="shrink-6" />
                      </span>
                    </div>
                    <div className = 'infoFlip dF-R-cc dNone' id = { 'info-' + item.id }>
                      <p className = 'mR-1 fw-7'>{ item.text }</p>
                      <img alt = '' className = '' src = { item.img }/>
                    </div>
                  </div>
                );
              })
            }
          </div>
        );
    }
  }
}

export default InteractiveFlip2;
