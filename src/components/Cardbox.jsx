import { Card } from 'antd';
import React from 'react';
import { Checkbox } from 'antd';
import '../mock/data.js'
class Cardbox extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      titleContent: '',
    }
  }

  onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    let titleContentTmp = checkedValues.toString();
    console.log('titleContent = ', titleContentTmp);
    this.setState({ titleContent: titleContentTmp })
  }

  render() {
    return (
      <div className="card-box" style={{ display: this.props.title ? 'inline' : 'none' }}>
        <Card
          title={this.props.title + '=' + this.state.titleContent}
          bordered={false}
          style={{
            marginTop: 30,
            width: 450,
            height: 100,
          }}
          type="inner"
        >
          <div><Checkbox.Group options={this.props.options} defaultValue={['']} onChange={this.onChange} /></div>
        </Card>
      </div>
    )
  }
}

export default Cardbox;