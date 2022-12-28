import React from 'react';
import { useDrop } from 'react-dnd';

// const style = {
//   position: 'absolute'
// }

const BoxDrop = ({ order, type, color }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
  // const [drop] = useDrop({
    accept: type,
    drop: () => ({ name: 'items', type }),
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
    <div className = {'dF-C-cc itemDrop'} id = {'itemDrop-' + (type)} ref = { drop } style = {{}} >
      <h3 className = 'fw-3 dNone' style = {{ 'color': color }} id = {'textDrop-' + (type)}>0{ order }</h3>
    </div>
  )
}
// <p>{ data }</p>
export default BoxDrop;
