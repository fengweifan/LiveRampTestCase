import { Card } from 'antd';
import React from 'react';

class Cardbox extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
  }

  render() {
    return (
      <div className="card-box" style={{ display: this.props.title ? 'inline' : 'none'}}>
        <Card
          title={this.props.title}
          bordered={false}
          style={{
            marginTop: 30,
            width: 450,
            height: 100,
          }}
          type="inner"
        >
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default Cardbox;