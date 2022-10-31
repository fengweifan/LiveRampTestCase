import React from 'react';
import Draggable from 'react-draggable'; // The default

const Box = () => {
  return <div className="box">
    <div className='drag-handler'>drag here</div>
    <div>box</div>
  </div>
}

function DragmItem() {
  return (
    <div className='drag-item'>
      <Draggable>
        <div><Box/></div>
      </Draggable>
    </div>
  );
}

export default DragmItem;

