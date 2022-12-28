import React, { Component } from 'react';

import './ItemInteractiveAudio.scss';

class ItemInteractiveAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      pageItem: 0,
      items: []
    }
  }

  makeItem = () => {
    const ITEM = this.props.dataItem[this.state.pageItem].map( (item, i) => {
      return(
        <div
          id = { item.time }
          className = { 'itemInfo animated fadeIn dNone ' + (item.labelSide === 'left' ? 'dF-Rr-cc' : 'dF-C-cc') + (item.last === true ? ' lastItem' : ' item') }
          key = { i }
          style = { { 'top': item.position.yPosition, 'left': item.position.xPosition, 'width': item.widthBox } }>
          {item.icon !== '' ? <img
            alt = 'Imagen Item'
            className = 'imageItem'
            style = { { 'width': item.size } }
            src = { item.icon }/> : null }
          <h5 className = 'fw-3 mB-05 tCenter' dangerouslySetInnerHTML = { { __html: item.label } } />
        </div>
      );
    } );
    this.showItem(ITEM);
    return ITEM;
  }

  showItem = (item) => {
    // console.log('item recibido: ');
    // console.log(item);
    for (var i = 0; i < item.length; i++) {
      if (this.props.time === item[i].props.id) {
        let itemGet = document.getElementById(item[i].props.id);
        itemGet.classList.remove('dNone');
      }
      if (this.props.movePage === true && this.props.time === this.props.moveTime) {
        document.getElementById('contentArea').style.left = '-975px';
      }
    }
  }

  render() {
    return (
      <div id = 'contentArea'>
        { this.makeItem() }
      </div>
    );
  }
}

export default ItemInteractiveAudio;
