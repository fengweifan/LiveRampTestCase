import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
const treeData = [
  {
    title: 'My Data',
    key: '0-0',
    children: [
      {
        title: 'DeviceReach-ppid',
        key: '0-0-0',
        children: [
          {
            title: 'AdultComposition',
            key: '0-0-0-0',
          },
          {
            title: 'Education',
            key: '0-0-0-1',
          },
          {
            title: 'Age',
            key: '0-0-0-2',
          },
          {
            title: 'Gender',
            key: '0-0-0-3',
          },
          {
            title: 'PresenceofChild',
            key: '0-0-0-4',
          },
        ],
      },
    ],
  },
];
class MyTree extends React.Component {
  constructor(props) {
    super(props);
    console.log("---------props----------", props)
  }

  onDragStart = (event, node) => {
    console.log('onDragStart', event, node);
    this.props.select(true)
  };

  onDragEnd = (event, node) => {
    console.log('onDragEnd', event, node);
    this.props.select(false)
  };

  onDrop = (event, node, dragNode, dragNodesKeys) => {
    console.log('onDragEnd', event, node, dragNode, dragNodesKeys);
    this.props.select(true)
  };

  render() {
    return (
      <div className='tree'>
        <Tree
          showIcon
          checkable={false}
          onDrop={this.onDrop}
          draggable={true}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          treeData={treeData}
        />
      </div>
    );
  };
};

export default MyTree;