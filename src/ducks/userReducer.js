import axios from 'axios'

// INITIAL STATE
const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

// ACTION CONSTANTS
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

// ACTION BUILDERS
export const requestUserData = () => {
    let promise = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: promise
    }
}

// REDUCER FUNCTION
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user
            return {email, firstName, lastName}
        default: 
            return state
    }
}

export default reducer