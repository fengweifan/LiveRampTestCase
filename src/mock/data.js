const Mock = require('mockjs')

//get adultComposition
module.exports = Mock.mock('/adultComposition', 'get', () => {
    const options = Mock.mock({
        'data': [
            {
                label: 'AbbreviatedFamily',
                value: 'AbbreviatedFamily',
            },
            {
                label: '2Persons',
                value: '2Persons',
            },
            {
                label: '3Persons',
                value: '3Persons',
            },
        ]
    })
    return {
        status: 200,
        data: options
    }
})

//get education
module.exports = Mock.mock('/education', 'get', () => {
    const options = Mock.mock({
        'data': [
            {
                label: 'College',
                value: 'College',
            },
            {
                label: 'PHD',
                value: 'PHD',
            },
            {
                label: 'University',
                value: 'University',
            },
        ]
    })
    return {
        status: 200,
        data: options
    }
})

//get age
module.exports = Mock.mock('/age', 'get', () => {
    const options = Mock.mock({
        'data': [
            {
                label: '25',
                value: '25',
            },
            {
                label: '26',
                value: '26',
            },
            {
                label: '27',
                value: '27',
            },
        ]
    })
    return {
        status: 200,
        data: options
    }
})