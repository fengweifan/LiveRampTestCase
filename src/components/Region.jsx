import React from 'react';
import Cardbox from './Cardbox'
const cardInfos = []
class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfos: [],
        };
        this.childRef = React.createRef();
    }

    componentDidMount () {
        console.log(this.childRef);
      }

    handleDragEnter = (e) => {
        e.preventDefault();
    }

    handleDragLeave = (e) => {
        e.preventDefault();
       
    }

    handleDrop = (e) => {
        e.preventDefault();
        console.log('handleDrop', e)
        let title = e.dataTransfer.getData('title')
        cardInfos.push(title);
        this.setState({ cardInfos: cardInfos })
        console.log("title", title)
        console.log("cardInfos", this.state.cardInfos)
        this.props.handleDataChange(title)
        this.childRef.current.getOptions(title);
    }

    render() {
        return (
            <div
                className='region-green'
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDragOver={this.handleDragEnter}
                onDrop={this.handleDrop}
            >
                <div className='card-box'>
                    <Cardbox title={this.state.cardInfos[0]} ref={this.childRef}/>
                    <Cardbox title={this.state.cardInfos[1]} ref={this.childRef}/>
                    <Cardbox title={this.state.cardInfos[2]} ref={this.childRef}/>
                </div >
            </div>
        )
    }
}

export default Region;