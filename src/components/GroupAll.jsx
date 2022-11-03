import { Card } from 'antd';
import React from 'react';
import Cardbox from './Cardbox'

class GroupAll extends React.Component {
  render() {
    return (
      <div>
        <div className='group-all'>
          <Card
            style={{
              width: 500,
              height: 450,
              backgroundColor: '#9370DB'
            }}
          >
            <div className='group-child'>
              <Card
                style={{
                  width: 480,
                  height: 278,
                  backgroundColor: '#FF6EB4'
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
    )
  }
}

export default GroupAll;