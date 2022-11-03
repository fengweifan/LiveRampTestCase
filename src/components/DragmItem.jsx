import React from 'react';
// import Draggable from 'react-draggable'; // The default
import Box from './Box'

class DragmItem extends React.Component {

  handleDragStart = (event, node) => {
    console.log('itemOnDragStart', event, node);
  };


  handleDragEnd = (event, node) => {
    console.log('itemOnDragEnd', event, node);
  };

  render() {
    return (
      <div
        className='drag-item'
        draggable={true}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        <div><Box /></div>
      </div>
    )
  }
}

export default DragmItem;