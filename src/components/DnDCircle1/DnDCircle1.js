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

import './DnDCircle1.scss';

library.add(fas, fab, far);

class DnDCircle1 extends Component {
  state = {
    actualItem: 0
  }

  hideModal = (e) => {
    document.getElementById('infoDrop-' + (e.currentTarget.id)).classList.add('dNone');
    document.querySelector('.bgItemGlobe').classList.add('dNone'); // OCULTAR EL FONDO

    document.querySelector('.footer').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.remove('dNone'); // OCULTAR EL FONDO
    document.querySelector('.instructionMouse').classList.remove('dNone'); // OCULTAR EL FONDO

    console.log(this.state.actualItem);

    if (this.state.actualItem === 8) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    } else {
      this.setState({
        actualItem: this.state.actualItem + 1
      });

      document.getElementById('itemDrop-' + (this.state.actualItem + 1)).classList.remove('disabled');
    }
  }

  render() {
    const { multimedia, imageArray, background, imageSelector } = this.props;

    const style = {
      backgroundImage: 'url(' + background + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat'
    }

    // console.log(this.state);
    return (
      <div className = 'DnDCircle1 d-Flex d-C j-E mL-1' style = {{ ...style }}>
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
                  <div  key = { i }>
                    <BoxDrop
                      id = { item.target }
                      img = { imageArray[i] }
                      order = { i }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />
                  </div>
                )
              })
            }
          </div>
          <div className = 'dragContent d-Flex d-R j-Bt aI-C'>
            {
              multimedia.dragItems.map( (item, i) => {
                return(
                  <div key = { item.drag } className = {'itemDrag'}>
                    <DragItem
                      id = { item.drag }
                      name = { item.data }
                      path = { imageArray[i] }
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
                  className = { 'itemGlobe dF-C-sc animated fadeIn dNone' }
                  id = { 'infoDrop-' + (item.target) } 
                  key = { i } >

                  <h3 className = 'mB-1 texto1' dangerouslySetInnerHTML = { {__html: item.title} }/>
                  <p className = '' dangerouslySetInnerHTML = { {__html: item.text} }/>

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

        <div className = 'exampleContent pAbs' id = 'exampleContent'>
          <img
            alt = 'hand'
            className = { 'hand pAbs' }
            src = { imageSelector } />
        </div>
      </div>
    );
  }
}

export default DnDCircle1;
