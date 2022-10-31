import React from 'react';
class Region extends React.Component {

    // get backGround
    getBg() {
        switch (this.props.color) {
            case "white":
                return 'region-white';
            case "green":
                return 'region-green';
            default:
                return 'region-white';
        }
    }

    render() {
        return (
            <div className={this.getBg()}>

            </div>
        )
    }
}

export default Region;