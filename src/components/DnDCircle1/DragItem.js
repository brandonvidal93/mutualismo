import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move',
}

const dragStart = (e) => {
  document.getElementById(e.currentTarget.id).classList.add('onDrag');
  document.getElementById('exampleContent').classList.add('dNone');
}

const dragOver = (e) => {
  e.stopPropagation();
}

const dragEnd = (e) => {
  document.getElementById(e.currentTarget.id).classList.remove('onDrag');
};

const DragItem = ({ name, path, type, id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${id} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        // console.log(document.getElementById('infoDrop-' + id));
        // console.log(document.getElementById('dragBox-' + id));

        document.getElementById('dragBox-' + id).classList.add('dNone');
        document.getElementById('imgDrop-' + id).classList.remove('disabledGray2');
        

        document.querySelector('.bgItemGlobe').classList.remove('dNone'); // OCULTAR EL FONDO
        document.getElementById('infoDrop-' + id).classList.remove('dNone');

        document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FONDO
        document.querySelector('.menuContent').classList.add('dNone'); // OCULTAR EL FONDO
        document.querySelector('.instructionMouse').classList.add('dNone'); // OCULTAR EL FONDO

        // document.getElementById('audioNotification').src = '../../assets/audio/check.mp3';
        // document.getElementById('audioNotification').play();
      } else {
        // document.getElementById('audioNotification').src = '../../assets/audio/error.mp3';
        // document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 'dragging' : 'noDragging'

  // isDragging ? document.getElementById('dragBox-' + id).classList.add('onDrag') : document.getElementById('dragBox-' + id).classList.remove('onDrag');

  return (
    <div
      onDragStart = { dragStart }
      onDragOver = { dragOver }
      onDragEnd = { dragEnd }
      ref = { drag } style = {{ ...style, }} id = {'dragBox-' + id } >
      <img
        alt = 'Drag'
        className = { opacity }
        src = { path } />
    </div>
  )
}

export default DragItem;
