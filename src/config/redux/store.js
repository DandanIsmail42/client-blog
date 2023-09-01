import { createStore } from "redux";

const initialState = {
    dataBlog : [],
    name: 'dundun'
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'ismail'
        }
    }
    return state
}

const store = createStore(reducer)

export default store