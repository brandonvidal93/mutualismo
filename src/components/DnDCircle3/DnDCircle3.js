import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './DropDot';
import DragWord from './DragDot';

import './DnDCircle3.scss';

class DnDCircle3 extends Component {
  state = {
    page: 1,
    countData: 0,
    countNoData: 0
  }

  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('itemDragged').length;

    if (cantidad === this.props.multimedia.dragItem.length) {
      // console.log('Final');
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;

    const style = {
      'backgroundImage': 'url(' + multimedia.resources.bgImg + ')',
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center'
    }
    return (
      <div className = 'DnDCircle3 d-Flex j-S aI-S'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = {'slideBox animated fadeIn c-6'}>
            {
              multimedia.dropZone.drops.map( (boxDrop, i) => {
                return(
                  <div key = { boxDrop.key } className = 'mB-025 d-Flex d-Rr j-E aI-C'>
                    <p className = 'labelDrop' dangerouslySetInnerHTML = {{ __html: boxDrop.text }} />
                    <DropWord
                      id = { boxDrop.key }
                      type = { boxDrop.type } />
                  </div>
                )
              })
            }
          </div>
          <div className = 'contentWords' id = 'contentWords' style = {{ ...style }} >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = ''>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      name = { item.text }
                      type = { item.type }
                      group = { item.type }
                      countWords = { this.countWords }
                      colorBg = { item.color }
                      posY = { item.posY }
                      posX = { item.posX } />
                    <p className = 'toolTip pAbs animated fadeIn dNone' id = { 'toolTip-' + item.id } style = {{ 'top': item.textPosY, 'left': item.textPosX, 'borderColor': item.color }}>{ item.text }</p>
                  </div>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DnDCircle3;
