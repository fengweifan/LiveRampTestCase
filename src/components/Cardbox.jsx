import { Card } from 'antd';
import React from 'react';
import { Checkbox } from 'antd';
import axios from 'axios'
import '../mock/data.js'

class Cardbox extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      titleContent: '',
      options: []
    }
  }

  getOptions = (title) => {
    //get data
    console.log('getOptions', title)
    let tmpData = []
    this.getData(title, tmpData)
  }

  getData = (title, tmpData) => {
    switch (title) {
      case 'AdultComposition':
        axios.get('/adultComposition').then(res => {
          console.log('AdultComposition', res.data.data.data)
          this.setData(res.data.data.data)
        })
        break;
      case 'Education':
        axios.get('/education').then(res => {
          console.log('Education', res.data.data.data)
          this.setData(res.data.data.data)
        })
        break;
      case 'Age':
        axios.get('/age').then(res => {
          console.log('Age', res.data.data.data)
          this.setData(res.data.data.data)
        })
        break;
      default:
        //nothing
        break;
    }
  }

  setData(data) {
    this.setState({ options: data })
    console.log('options', data)
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
          <div><Checkbox.Group options={this.state.options} defaultValue={['']} onChange={this.onChange} /></div>
        </Card>
      </div>
    )
  }
}

export default Cardbox;