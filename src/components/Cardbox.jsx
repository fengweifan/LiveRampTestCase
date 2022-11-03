import { Card } from 'antd';
import React from 'react';
import { Checkbox } from 'antd';

const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
class Cardbox extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
  }

  onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }

  render() {
    return (
      <div className="card-box" style={{ display: this.props.title ? 'inline' : 'none' }}>
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
          <div><Checkbox.Group options={options} defaultValue={['']} onChange={this.onChange} /></div>
        </Card>
      </div>
    )
  }
}

export default Cardbox;