import { Card } from 'antd';
import React from 'react';
const Cardbox = () => (
  <div className="card-box">
    <Card
      title="Card title"
      bordered={false}
      style={{
        marginTop:10,
        width: 450,
        height:100,
        backgroundColor:'#CAE1FF'
      }}
      type="inner"
    >
      <p>Card content</p>
    </Card>
  </div>
);
export default Cardbox;

