import React from 'react';
import { useDrop } from 'react-dnd';

const DropWord = ({ posY, posX, type, size, id, colorBorder, img, imgRes, imgResY, imgResX, imgResId }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: 'Artículos' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'boxDrop d-Flex j-C aI-C' ref = { drop } style = {{  }} id = { 'boxDrop-' + type } >
      <h2 className = ''>?</h2>
    </div>
  )
}
export default DropWord;

// ...style, 'top': posY, 'left': posX, 'width': size
// <img alt = 'Imagen' className = '' src = { img }/>
// <img alt = 'Imagen' className = 'pAbs dNone' id = { 'imgRes-' + imgResId } src = { imgRes }/>
