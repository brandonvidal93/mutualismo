import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './Accordion2.scss';

// library.add(fas, fab, far);

class Accordion2 extends Component {
  state = {
    count: 1,
    actual: 0
  }

  showInfo = (e) => {
    e.preventDefault();

    let idItem = e.currentTarget.id.substring(16);

    let btnSelect = document.getElementById(e.currentTarget.id);

    if (btnSelect.classList.contains('active')) {

      btnSelect.classList.remove('active');
      document.getElementById('accordionInfo-' + idItem).classList.remove('visible');   
      document.getElementById('accordionInfo-' + idItem).classList.remove('inInfo');   
      document.getElementById('accordionInfo-' + idItem).classList.add('outInfo');
      setTimeout(() => {
        document.getElementById('accordionInfo-' + idItem).classList.add('dNone');
      }, 100);

    } else {

      let parent = document.getElementsByClassName('accordionItem');

      for (let i = 0; i < parent.length; i++) {
        let childButton = parent[i].getElementsByClassName('accordionButton');
        let childInfo = parent[i].getElementsByClassName('accordionInfo');
        
        for (let j = 0; j < childButton.length; j++) {
          childButton[j].classList.remove('active');
        }

        for (let k = 0; k < childInfo.length; k++) {
          childInfo[k].classList.remove('visible');
          childInfo[k].classList.add('dNone'); 
        } 
      }

      btnSelect.classList.add('active');
      document.getElementById('accordionInfo-' + idItem).classList.remove('dNone');
      document.getElementById('accordionInfo-' + idItem).classList.remove('outInfo');
      document.getElementById('accordionInfo-' + idItem).classList.add('inInfo');
      setTimeout(() => {
        document.getElementById('accordionInfo-' + idItem).classList.add('visible');
      }, 100);
      
    }

    this.countItem(idItem);

  }

  countItem = idItem => {
    const { multimedia } = this.props.dataPage;
    const { isEnded } = this.props;

    this.setState({
      actual: parseInt(idItem),
      count: this.state.count + 1
    })

    if (this.state.actual >= multimedia.length - 2 && this.state.count >= multimedia.length - 1) {
      isEnded(true);
    }
  }

  render() {
    const { multimedia } = this.props.dataPage;

    return(
      <div className = 'Accordion2 d-Flex j-S aI-St'>
        {
          multimedia.map((item, i) => {
            return(
              <div className = 'accordionItem d-Flex j-C aI-St' key = { i }>
                <div 
                  className = { 'accordionButton d-Flex j-C aI-C ' + (i !== 0 ? '' : 'active')} 
                  id = { 'accordionButton-' + i } 
                  onClick = { this.showInfo }
                  style =  {{ 'backgroundColor': item.button.color }} >
                  {
                    item.button.text ? <h3 className = 'textButton tCenter blanco' dangerouslySetInnerHTML = {{ __html: item.button.text }}></h3> : null
                  }
                </div>
                <div className = { 'accordionInfo d-Flex j-C ' + (i !== 0 ? 'dNone' : 'visible') } id = { 'accordionInfo-' + i }>
                  {/* <div className = 'mR-2'>
                    {
                      // item.information.img1 ? <img alt = 'Imagen' className = '' src = { item.information.img1 }/> : null
                    }
                  </div> */}
                  <div>
                    {
                      item.information.text ? <p className = '' dangerouslySetInnerHTML = {{ __html: item.information.text }}></p> : null
                    }
                    {
                      // item.information.img2 ? <img alt = 'Imagen' className = ' mT-1' src = { item.information.img2 }/> : null
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default Accordion2;