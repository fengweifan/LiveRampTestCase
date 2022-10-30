import React from 'react';
import Region from './Region'
class LiveRamp extends React.Component {
    render() {
        return (
            <div className='live-ramp'>
                <div className='title'>
                    <h1>LiveRamp Test Case</h1>
                </div>
                <div className='my-tree-region'>
                    <Region color={'white'}/>
                    <Region color={'green'}/>
                </div>
            </div>
        );
    }
}

export default LiveRamp;