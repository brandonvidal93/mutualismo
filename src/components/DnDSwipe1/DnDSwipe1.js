import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './BoxDrop';
import DragItem from './DragItem';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DnDSwipe1.scss';

library.add(fas, fab, far);

class DnDSwipe1 extends Component {
  state = {
    actualItem: 0
  }

  hideModal = (e) => {
    document.getElementById('infoDrop-' + (e.currentTarget.id)).classList.add('dNone');
    console.log(this.state.actualItem);

    if (this.state.actualItem === 4) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    } else {
      this.setState({
        actualItem: this.state.actualItem + 1
      });

      document.getElementById('dropBg-' + (this.state.actualItem + 1)).classList.remove('disabledGray2');
    }
  }

  render() {
    const { multimedia } = this.props;

    // console.log(this.state);
    return (
      <div className = 'DnDSwipe1'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        <DndProvider backend={HTML5Backend}>          
          <div className = 'dropContent c-10'>
            {
              multimedia.dropZone.drops.map( (item, i) => {
                const style = {
                  'backgroundImage': 'url(' + item.img + ')',
                  'backgroundRepeat': 'no-repeat'
                }
                return(
                  <div className = { 'dropBg pAbs ' + (i !== 0 ? 'disabledGray2' : '') } id = { 'dropBg-' + i }  key = { i } style = {{ ...style, 'top': item.posY, 'left': item.posX}}>
                    {
                      i % 2 === 0 ? <img alt = 'Imagen' className = 'arrowDown pAbs' src = { multimedia.resources.bg2 }/> : <img alt = 'Imagen' className = 'arrowUp pAbs' src = { multimedia.resources.bg1 }/>
                    }
                    <BoxDrop
                      color = { item.color }
                      id = { item.target }
                      img = { item.img }
                      order = { item.type }
                      type = { item.type } />
                  </div>
                )
              })
            }
          </div>
          <div className = 'dragContent d-Flex d-R j-C aI-C'>
            {
              multimedia.dragItems.map( item => {
                return(
                  <div key = { item.drag } className = {'pAbs'} style = {{ 'top': item.posY, 'left': item.posX }}>
                    <DragItem
                      color = { item.color }
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

        {
          multimedia.dropZone.infoBox.map( (item, i) => {
            return(
              <div
                className = { 'itemGlobe pAbs dF-C-cs animated fadeIn dNone ' + item.trian }
                id = { 'infoDrop-' + (item.target) } 
                key = { i }
                style = {{ 'color': item.color, 'top': item.posY, 'left': item.posX }} >

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
    );
  }
}

export default DnDSwipe1;
