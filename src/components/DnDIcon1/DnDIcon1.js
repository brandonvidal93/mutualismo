import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './DropLabel';
import DragWord from './DragLabel';

import './DnDIcon1.scss';

class DnDIcon1 extends Component {
  state = {
    count: 0
  }

  countWords = () => {
    const { multimedia } = this.props;
    let cantidad = multimedia.dragItem.length;

    this.setState({
      count: this.state.count + 1
    });

    this.state.count === cantidad ? this.props.isEnded(true) : console.log('No ha finalizado');
  }

  render() {
    const { multimedia } = this.props;
    const style = {
      'backgroundImage': 'url(' + multimedia.resources.bgImg + ')',
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center'
    }

    return (
      <div className = 'DnDIcon1 d-Flex d-R j-E aI-S'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentWords d-Flex d-R j-S aI-S wW c-8' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = 'd-Flex d-R j-S aI-C'>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      text = { item.text }
                      type = { item.type }
                      img = { item.img }
                      imgSource = { item.imgSource }
                      countWords = { this.countWords } />
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentDrop d-Flex j-S aI-C mB-2' id = 'contentDrop' style = {{ ...style }}>
            {
              multimedia.dropZone.drops.map((item, i) => {
                return(
                  <div key = { item.key } className = 'itemDrop mL-1 mR-1 d-Flex d-R j-S aI-C'>
                    <DropWord id = { item.key } type = { item.type } text = { item.text } bgDrop = { item.bgDrop } />
                  </div>
                )
              })
            }
            <div className = 'boxDropText d-Flex j-S aI-C' id = {'textDrop'}>

            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DnDIcon1;
