import { Card } from 'antd';
import React from 'react';
const CardGroup = () => (
  <div className='card-box-group'>
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title="Inner Card title"
        extra={<a href="#">More</a>}
      >
        Inner Card content
      </Card>
    </Card>
  </div>
);
export default CardGroup;