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

import './DnDCircle2.scss';

library.add(fas, fab, far);

class DnDCircle2 extends Component {
  state = {
    actualItem: 0
  }

  hideModal = (e) => {
    document.getElementById('infoFinal').classList.remove('dNone');
    document.querySelector('.bgItemGlobe').classList.add('dNone'); // OCULTAR EL FONDO

    document.querySelector('.footer').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.remove('dNone'); // OCULTAR EL FONDO
    // document.querySelector('.instructionMouse').classList.remove('dNone'); // OCULTAR EL FONDO
  }

  countDrop = () => {
    // console.log(this.state.actualItem);
    if (this.state.actualItem === 0) {
      document.querySelector('.bgItemGlobe').classList.remove('dNone'); // OCULTAR EL FONDO
      document.getElementById('infoFinal').classList.remove('dNone');

      document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FOOTER
      document.querySelector('.menuContent').classList.add('dNone'); // OCULTAR EL MENU
      // document.querySelector('.instructionMouse').classList.add('dNone'); // OCULTAR EL INSTRUCTION

      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    } else {
      this.setState({
        actualItem: this.state.actualItem + 1
      });
    }
  }

  render() {
    const { multimedia } = this.props;

    const style = {
      backgroundImage: 'url(' + multimedia.bg + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'top top',
      backgroundRepeat: 'no-repeat'
    }

    // console.log(this.state);
    return (
      <div className = 'DnDCircle2 d-Flex j-C aI-C' style = {{ ...style }}>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        <DndProvider backend={HTML5Backend}>          
          <div className = 'dropContent'>
            {
              multimedia.dropZone.drops.map( (item, i) => {
                return(
                  <BoxDrop
                    key = { i }
                    id = { item.target }
                    img = { item.img }
                    imgPos = {item.imgPos}
                    order = { i }
                    posY = { item.posY }
                    posX = { item.posX }
                    type = { item.type } />
                )
              })
            }
          </div>
          <div className = 'dragContent'>
            {
              multimedia.dragItems.map( item => {
                return(
                  <div key = { item.drag } className = {'pAbs'} style = {{ 'top': item.posY, 'left': item.posX }}>
                    <DragItem
                      countDrop = { this.countDrop }
                      id = { item.drag }
                      name = { item.data }
                      path = { item.img }
                      type = { item.type } />
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

                  <img
                    alt = 'Drag'
                    className = 'mB-1'
                    src = { item.img } />

                  <p className = 'mB-1 tCenter' dangerouslySetInnerHTML = { {__html: item.text} }/>

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

export default DnDCircle2;
