import { Card } from 'antd';
import React from 'react';
const Cardbox = () => (
  <div className="card-box">
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
    </Card>
  </div>
);
export default Cardbox;

