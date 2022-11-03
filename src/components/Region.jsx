import React from 'react';
import Cardbox from './Cardbox'
import axios from 'axios'
const cardInfos = []
const checkOptions = []
class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfos: [],
            options: [],
        };
        this.childRef = React.createRef();
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
        this.getData(title)
    }

    getData = (title) => {
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
        checkOptions.push(data)
        this.setState({ options: checkOptions }, () => {
            console.log('options', this.state.options)
        })
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
                    <div
                    ><Cardbox
                            title={this.state.cardInfos[0]}
                            options={this.state.options[0]}
                        />
                    </div>
                    <div
                    ><Cardbox
                            title={this.state.cardInfos[1]}
                            options={this.state.options[1]}
                        />
                    </div>
                    <div
                    ><Cardbox
                            title={this.state.cardInfos[2]}
                            options={this.state.options[2]}
                        />
                    </div>
                </div >
            </div>
        )
    }
}

export default Region;