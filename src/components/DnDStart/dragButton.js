import React, { Component } from 'react';

class dragButton extends Component {
  dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData('buttonId', target.id);

    // setTimeout(() => {
    //   target.style.display = 'none';
    // }, 0);

    document.getElementById(e.target.id).classList.add('onDrag');
  }

  dragOver = (e) => {
    e.stopPropagation();
  }

  dragEnd = (e) => {
    document.getElementById(e.target.id).classList.remove('onDrag');
  };

  render () {
    return(
      <div
        className = { this.props.className }
        draggable = { this.props.draggable }
        id = { this.props.id }
        onDragStart = { this.dragStart }
        onDragOver = { this.dragOver }
        onDragEnd = { this.dragEnd }
      >

        { this.props.children }

      </div>
    );
  }
}

export default dragButton;
