const changeText = payload => {
    return {
        type: 'changeText',
        payload
    }
}


module.exports = {
    changeText,
}