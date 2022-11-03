import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import {
  FolderOutlined, FileOutlined
} from '@ant-design/icons';
const treeData = [
  {
    title: 'My Data',
    key: '0-0',
    disabled: true,
    children: [
      {
        title: 'DeviceReach-ppid',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'AdultComposition',
            key: '0-0-0-0',
            icon: <FileOutlined />,
            disabled: false,
          },
          {
            title: 'Education',
            key: '0-0-0-1',
            icon: <FileOutlined />,
            disabled: false,
          },
          {
            title: 'Age',
            key: '0-0-0-2',
            icon: <FileOutlined />,
            disabled: false,
          }
        ],
      },
    ],
  },
];
class MyTree extends React.Component {

  constructor(props) {
    super(props);
    console.log('MyTree', props)
  }

  onDragStart = (e) => {
    console.log('onDragStart', e);
    console.log('title', e.node.title);
    e.event.dataTransfer.setData("title", e.node.title);
  };

  onDragEnd = (e) => {
    console.log('onDragEnd', e);
    console.log("MyTreeProps", this.props)
  };

  render() {
    return (
      <div className='tree'>
        <Tree
          icon={<FolderOutlined />}
          defaultExpandAll
          autoExpandParent={true}
          showIcon
          checkable={false}
          draggable={true}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          treeData={treeData}
          blockNode={true}
          defaultExpandParent={true}
        />
      </div>
    );
  };
};

export default MyTree;