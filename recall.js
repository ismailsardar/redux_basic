const { createStore, applyMiddleware, combineReducers } = require("redux");
const { default: logger } = require("redux-logger");

//constant
const INCRESE = 'INCRESE';
const DECRESE = 'DECRESE';

//user
const ADD_USER = 'ADD_USER'
const GET_USERS = 'GET_USERS'

//initalValue
const initalState = {
    count: 0,
}
//USER initai
const initalUserState = {
    user: ['ismile'], 
    countUsers: 1,
}

//action
const setIncrese = ()=> {
    return{
        type: INCRESE,
    }
}
const setDecrese = ()=> {
    return{
        type: DECRESE,
    }
}
const setUser = (user)=> {
    return{
        type: ADD_USER,
        payload: user,
    }
}
const getUsers = ()=> {
    return{
        type: GET_USERS,
    }
}

//reduser
const countReduser = (state=initalState, action) => {
    switch (action.type) {
        case INCRESE:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECRESE:
            return {
                ...state,
                count: state.count - 1,
            }              
        default:
            return state;
    }
}

const usersReduser = (state=initalUserState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                countUsers: state.countUsers
            }
        case ADD_USER:
            return {
                ...state,
                user: [...state.user, action.payload],
                countUsers: state.countUsers + 1,
            }              
        default:
            return state;
    }
}

//combing Reduser
const rootReduser = combineReducers({
    countR: countReduser,
    usersR: usersReduser,
})

//store
// const store = createStore(countReduser, applyMiddleware(logger));
const store = createStore(rootReduser);//applyMiddleware(logger)
store.subscribe(()=>{
    console.log(store.getState());
});

// dispatch 
// store.dispatch(setIncrese());
// store.dispatch(setIncrese());
store.dispatch(setIncrese());
store.dispatch(setIncrese());
// store.dispatch(setDecrese());

console.log('<<<<=========........=====>>>>')

store.dispatch(getUsers());
store.dispatch(setUser('rakib'));
