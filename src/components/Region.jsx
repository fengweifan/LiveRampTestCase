import React from 'react';
import Cardbox from './Cardbox'
import axios from 'axios'
import { Alert } from 'antd';
import '../mock/data.js'
const cardInfos = []
const checkOptions = []
let parentGroup = []
let childGroup = []
let Group = ''
class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfos: [],
            options: [],
            childName: ''
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

        if (parentGroup.length < 2) {
            parentGroup.push(title);
            if (parentGroup.length === 2) {
                Group = '[' + parentGroup + ']';
            }
        } else {
            childGroup.push(title);
        }
        console.log('parentGroup', parentGroup);
        console.log('childGroup', childGroup);

    }

    handleDropOne = (e) => {
        e.preventDefault();
        console.log('handleDropOne', e)
        let title = e.dataTransfer.getData('title')
        childGroup.push(this.state.cardInfos[0]);
        childGroup.push(title)
        console.log("handleDropOneTitle", childGroup)
        console.log("handleDropOneTitle", Group)
        let commonChlid = this.state.cardInfos[0]
        Group = '[[' + this.state.cardInfos[0] + ',' + title + '],' + parentGroup[1] + ']'

    }

    handleDropTwo = (e) => {
        e.preventDefault();
        console.log('handleDropTwo', e)
        let title = e.dataTransfer.getData('title')
        childGroup.push(this.state.cardInfos[1]);
        childGroup.push(title)
        console.log("handleDropTwoTitle", childGroup)
        console.log("handleDropTwoTitle", Group)
        let commonChlid = this.state.cardInfos[1]
        Group = '[[' + this.state.cardInfos[1] + ',' + title + '],' + parentGroup[0] + ']'
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
            <div>
                <div>
                    <Alert
                        message={"GroupInfo:" + Group}
                        type="info"
                    />
                </div>
                <div
                    className='region-green'
                    onDragEnter={this.handleDragEnter}
                    onDragLeave={this.handleDragLeave}
                    onDragOver={this.handleDragEnter}
                    onDrop={this.handleDrop}
                >
                    <div className='card-box'>
                        <div
                            onDragEnter={this.handleDragEnter}
                            onDragLeave={this.handleDragLeave}
                            onDragOver={this.handleDragEnter}
                            onDrop={this.handleDropOne}
                        ><Cardbox
                                title={this.state.cardInfos[0]}
                                options={this.state.options[0]}
                            />
                        </div>
                        <div
                            onDragEnter={this.handleDragEnter}
                            onDragLeave={this.handleDragLeave}
                            onDragOver={this.handleDragEnter}
                            onDrop={this.handleDropTwo}
                        ><Cardbox
                                title={this.state.cardInfos[1]}
                                options={this.state.options[1]}
                            />
                        </div>
                        <div><Cardbox
                            title={this.state.cardInfos[2]}
                            options={this.state.options[2]}
                        />
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default Region;