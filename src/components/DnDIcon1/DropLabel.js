import React from 'react';
import { useDrop } from 'react-dnd';
//
// const style = {
//   position: 'absolute'
// }

const DropWord = ({ id, type, text, bgDrop }) => {
  // console.log(id, type, groupId);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: type, text: text }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'boxDrop d-Flex j-S aI-C' ref = { drop }  id = { id } style = {{ 'backgroundImage': 'url(' + bgDrop + ')' }} >

    </div>
  )
}
export default DropWord;
