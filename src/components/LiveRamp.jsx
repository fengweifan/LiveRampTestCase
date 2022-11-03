import React from 'react';
import Region from './Region'
import MyTree from './MyTree'

class LiveRamp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changeItemTitle: ''
        }
    }

    onDataChange = (title) => {
        console.log('onDataChange', title)
        this.setState({ changeItemTitle: title })
    }

    render() {
        return (
            <div className='live-ramp'>
                <div className='title'>
                    <h1>LiveRamp Test Case</h1>
                </div>
                <div className='my-tree-region'>
                    <div><MyTree changeItem={this.state.changeItemTitle} /></div>
                    <Region handleDataChange={this.onDataChange} />
                </div>
            </div>
        );
    }
}

export default LiveRamp;