import {SET_TODO_INPUT,ADD_TODO_INPUT} from './constants'

const initState ={
    todos : [],
    todoInput : '',
}

function reducer (state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        default:
            return new Error(`Invalid action ${action.type}`)
    }
}

export {initState}
export default reducer