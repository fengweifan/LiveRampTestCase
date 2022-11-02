import { Card } from 'antd';
import React from 'react';
import Cardbox from './Cardbox'
const GroupAll = () => (
  <div>

    <div className='group-all'>
      <Card
        style={{
          width: 500,
          height: 450
        }}
      >
          <div className='group-child'>
          <Card
            style={{
              width: 480,
              height: 220,
              backgroundColor: '#9370DB'
            }}>
          </Card>
        </div>
        <div className='card-box'>
          <Cardbox />
          <Cardbox />
          <Cardbox />
        </div >

      </Card>
    </div>

  </div>

);
export default GroupAll;