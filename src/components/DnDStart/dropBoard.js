import React, { Component } from 'react';

class dropBoard extends Component {

  drop = (e) => {
    e.preventDefault();
    const buttonId = e.dataTransfer.getData('buttonId');

    const button = document.getElementById(buttonId);
    button.style.display = 'block';

    e.target.appendChild(button);

    this.props.startCourse(e.target.id);

    document.getElementById('DnDStart').classList.add('disabledSolid');
  }

  dragOver = (e) => {
    e.preventDefault();
  }

  render () {
    return(
      <div
        className = { this.props.className }
        id = { this.props.id }
        onDrop = { this.drop }
        onDragOver = { this.dragOver }
      >

        { this.props.children }

      </div>
    );
  }
}

export default dropBoard;
