import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  position: 'absolute'
}

const BoxDrop = ({ id, img, imgPos, order, posY, posX, type }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
  // const [drop] = useDrop({
    accept: type,
    drop: () => ({ name: 'Artículos' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  // let imgDrop = path;
  if (isActive) {
    // imgDrop = pathTarget;
  } else if (canDrop) {
    // imgDrop = pathTarget;
  }
  return (
    <div className = {'dF-C-cc itemDrop'} id = {'itemDrop-' + (id)} ref = { drop } style = {{ ...style, 'top': posY, 'left': posX }} >
      <img
        alt = 'Drop'
        className = 'pAbs dNone'
        id = { 'imgDrop-' + id }
        src = { img }
        style = {{ 'top': imgPos.Y, 'left': imgPos.X }} />
    </div>
  )
}
// <p>{ data }</p>
export default BoxDrop;
