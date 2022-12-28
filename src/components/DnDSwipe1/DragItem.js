import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  cursor: 'move',
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

const DragItem = ({ name, type, id, color }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item.type && dropResult) {
        // console.log(`You dropped ${item.type} into ${dropResult.name}!`);
        // console.log(`You dropped ${id} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        // console.log(document.getElementById('infoDrop-' + id));
        // console.log(document.getElementById('dragBox-' + id));

        document.getElementById('dragBox-' + id).classList.add('dNone');
        document.getElementById('itemDrop-' + id).classList.add('dropped');
        document.getElementById('textDrop-' + id).classList.remove('dNone');

        document.getElementById('infoDrop-' + id).classList.remove('dNone');

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // const opacity = isDragging ? 'dragging' : 'noDragging'
  const opacity = isDragging ? 'dragging' : 'noDragging'

  return (
    <div
      className = { 'dragBox d-Flex j-C aI-C '}
      onDragStart = { dragStart }
      onDragOver = { dragOver }
      onDragEnd = { dragEnd }
      ref = { drag } style = {{ ...style, }} id = {'dragBox-' + id } >
        <h3 className = { 'fw-3 ' + opacity} style = {{ 'color': color }}>0{ id }</h3>
    </div>
  )
}

export default DragItem;
