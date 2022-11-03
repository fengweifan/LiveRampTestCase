import React from 'react';
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <div className='drag-handler'>drag here</div>
        <div>box</div>
      </div>
    )
  }
}

export default Box;