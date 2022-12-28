import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const dragStart = (e) => {
  document.getElementById(e.currentTarget.id).classList.add('onDrag');
}

const dragOver = (e) => {
  e.stopPropagation();
}

const dragEnd = (e) => {
  document.getElementById(e.currentTarget.id).classList.remove('onDrag');
};

const hoverStart = (e) => {
  let idItem = e.currentTarget.id.substring(9);
  document.getElementById('toolTip-' + idItem).classList.remove('dNone');
}

const hoverEnd = (e) => {
  let idItem = e.currentTarget.id.substring(9);
  document.getElementById('toolTip-' + idItem).classList.add('dNone');
}

const DragWord = ({ name, type, id, countWords, colorBg, posY, posX }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }

        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('dragWord-' + id).classList.add('itemDragged');
        document.getElementById('boxDrop-' + type).classList.add('WordDropped');
        document.getElementById('boxDrop-' + type).style.backgroundColor = colorBg;
        document.getElementById('boxDrop-' + type).innerHTML = '<h3 class = "fw-3">0' + type + '</h3>';

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        countWords();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 'dragging' : 'noDragging'

  return (
    <div 
    onDragStart = { dragStart }
    onDragOver = { dragOver }
    onDragEnd = { dragEnd }
    onMouseEnter = { hoverStart }
    onMouseLeave = { hoverEnd }
    className = { 'dragWord d-Flex j-C aI-C pAbs'} ref = { drag } 
    style = {{ ...style, 'backgroundColor': colorBg, 'top': posY, 'left': posX }} id = {'dragWord-' + id } >
      <h2 className = { 'fw-3 ' + opacity }>0{type}</h2>
    </div>
  )
}

export default DragWord;
