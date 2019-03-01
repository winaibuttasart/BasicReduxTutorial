const initialState = {
    firstName: '',
    lastname: ''
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'changeText': {
            let { name, value } = payload
            return {
                ...state,
                [name]: value
            }
        }
        default:
            return state
    }
}


export default reducer