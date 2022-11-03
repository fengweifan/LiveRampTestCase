import React from 'react';
import Region from './Region'
import MyTree from './MyTree'
class LiveRamp extends React.Component {
    render() {
        return (
            <div className='live-ramp'>
                <div className='title'>
                    <h1>LiveRamp Test Case</h1>
                </div>
                <div className='my-tree-region'>
                    <div><MyTree /></div>
                    <Region />
                </div>
            </div>
        );
    }
}

export default LiveRamp;