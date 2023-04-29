import axios from 'axios'

const ADD_USERS = 'ADD_USERS'

const initialState = {
    users: []
}
export const usersReducer = (state=initialState, action) => {
    if (action.type === ADD_USERS) {
        return {users: action.payload}
    }
    return state
}
// экшн креэйтор
const addUsers = payload => ({type: ADD_USERS, payload})

// THUNK 
// npm i axios
export const fetchUsers = () => {
    return dispatch => {
        // dispatch(showLoader())
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            resp => dispatch(
                addUsers(resp.data)
                ))
    }
}
// MIDDLEWARE