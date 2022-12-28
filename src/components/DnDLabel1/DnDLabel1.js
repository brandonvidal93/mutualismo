import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './BoxDrop';
import DragItem from './DragItem';
// import ModalInfo from './ModalInfo2';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DnDLabel1.scss';

library.add(fas, fab, far);

class DnDLabel1 extends Component {
  state = {
    actualItem: 0
  }

  trackScrolling = (e) => {
    e.preventDefault();
    const CONTENTBOX = document.getElementById('dropContent');
    // console.log(CONTENTBOX);
    if (e.currentTarget.id === 'btnNavLeft') {
      CONTENTBOX.scrollLeft = CONTENTBOX.scrollLeft - 300;
    }
    if (e.currentTarget.id === 'btnNavRight') {
      CONTENTBOX.scrollLeft = CONTENTBOX.scrollLeft + 300;
    }
  }

  hideModal = (e) => {
    document.getElementById('infoFinal').classList.remove('dNone');
    document.querySelector('.bgItemGlobe').classList.add('dNone'); // OCULTAR EL FONDO

    document.querySelector('.footer').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.instructionMouse').classList.remove('dNone'); // OCULTAR EL FONDO
  }

  countDrop = () => {
    const { multimedia } = this.props;

    if (this.state.actualItem === multimedia.dropZone.drops.length - 1) {
      document.querySelector('.bgItemGlobe').classList.remove('dNone'); // OCULTAR EL FONDO
      document.getElementById('infoFinal').classList.remove('dNone');

      document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FOOTER
      document.querySelector('.menuContent').classList.add('dNone'); // OCULTAR EL MENU
      document.querySelector('.instructionMouse').classList.add('dNone'); // OCULTAR EL INSTRUCTION

      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    } else {
      this.setState({
        actualItem: this.state.actualItem + 1
      });
    }
  }

  render() {
    const { multimedia } = this.props;

    // const style = {
    //   backgroundImage: 'url(' + multimedia.bg + ')',
    //   backgroundSize: 'auto',
    //   backgroundPosition: 'top center',
    //   backgroundRepeat: 'no-repeat'
    // }

    // console.log(this.state);
    return (
      <div className = 'DnDLabel1 d-Flex d-C j-E aI-C' style = {{ }}>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        <DndProvider backend={HTML5Backend}>    
          <div className = 'trackContent d-Flex j-C aI-C'>
            <button
              className = { 'buttonNav'}
              id = 'btnNavLeft'
              onClick = { this.trackScrolling }>
              <FontAwesomeIcon
                className = 'iconButton'
                icon = { ['fas', 'chevron-left'] }
                size = 'lg' />
            </button>

            <div className = 'dropContent d-Flex j-S aI-E mL-1 mR-1' id = 'dropContent'>
              {
                multimedia.dropZone.drops.map( (item, i) => {
                  return(
                    <div className = 'dropInfo d-Flex j-C aI-C mL-05 mR-05'  key = { i }>
                      <p className = 'tCenter labelDrop fw-7' dangerouslySetInnerHTML = { {__html: item.text} }/>
                      <BoxDrop
                        id = { item.target }
                        img = { item.img }
                        order = { i }
                        posY = { item.posY }
                        posX = { item.posX }
                        type = { item.type } />
                    </div>
                  )
                })
              }
            </div>

            <button
              className = { 'buttonNav pulse' }
              id = 'btnNavRight'
              onClick = { this.trackScrolling }>
              <FontAwesomeIcon
                className = 'iconButton'
                icon = { ['fas', 'chevron-right'] }
                size = 'lg' />
            </button>
          </div>

          <div className = 'line mB-1'></div>

          <div className = 'dragContent d-Flex d-R j-C aI-E'>
            {
              multimedia.dragItems.map( item => {
                return(
                  <div key = { item.drag } className = {'d-Flex d-C j-E aI-C mL-05 mR-05'}>
                    <DragItem
                      countDrop = { this.countDrop }
                      id = { item.drag }
                      name = { item.data }
                      path = { item.img }
                      type = { item.type } />
                    <p className = 'tCenter' dangerouslySetInnerHTML = { {__html: item.text} }/>
                  </div>
                )
              })
            }
          </div>
        </DndProvider>

        <div className = 'bgItemGlobe animated fadeIn dNone'>
          {
            multimedia.dropZone.infoBox.map( (item, i) => {
              return(
                <div
                  className = { 'itemGlobe dF-C-cc animated fadeIn dNone' }
                  id = { 'infoFinal' } 
                  key = { i } >

                  <h3 className = 'mB-1 tCenter blanco' dangerouslySetInnerHTML = { {__html: item.title} }/>
                  <p className = 'tCenter blanco' dangerouslySetInnerHTML = { {__html: item.text} }/>

                  <button
                    className = 'buttonClose'
                    onClick = { this.hideModal }
                    id = { item.target }
                    >
                    <span className = 'fa-layers fa-fw iconButton' >
                      <FontAwesomeIcon icon="circle" />
                      <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                    </span>
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default DnDLabel1;
