import { Card } from 'antd';
import React from 'react';
import Cardbox from './Cardbox'
const GroupAll = () => (
  <div className='group-all'>
    <Card
      style={{
        width: 500,
        height: 450
      }}
    >
      <div className='card-box'>
        <Cardbox 
        style={{
           
        }} />
        <Cardbox />
        <Cardbox />
      </div >
    </Card>

  </div>
);
export default GroupAll;