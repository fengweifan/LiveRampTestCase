import React from 'react';
import Region from './Region'
import MyTree from './MyTree'
// import DragmItem from './DragmItem'
class LiveRamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isItemShow: false,
        }
    }
    // one item is selected
    onSelect = (value) => {
        console.log(value, 'this item is selected!')
        this.setState({ isItemShow: value })
    }

    render() {
        return (
            <div className='live-ramp'>
                <div className='title'>
                    <h1>LiveRamp Test Case</h1>
                </div>
                {/* <div style={{ display: this.state.isItemShow ? 'block' : 'none' }}><DragmItem /></div> */}
                <div><MyTree select={this.onSelect} /></div>
                <div className='my-tree-region'>
                    <Region color={'white'} />
                    <Region color={'green'} />
                </div>
            </div>
        );
    }
}

export default LiveRamp;