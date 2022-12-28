import React from 'react';
import { useDrop } from 'react-dnd';

// const style = {
//   position: 'absolute'
// }

const BoxDrop = ({ id, img, order, posY, posX, type }) => {
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
    <div className = {'dF-C-cc itemDrop'} id = {'itemDrop-' + (order)} ref = { drop } style = {{ }} >
      <img
        alt = 'Drop'
        className = 'dNone'
        id = { 'imgDrop-' + id }
        src = { img } />

    </div>
  )
}
// <p>{ data }</p>
export default BoxDrop;
// ...style, 'top': posY, 'left': posX 