const { createStore } = require("redux");

//type declear
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_VALUE = 'ADD_VALUE';

const ADD_USER = 'ADD_USER';


//STATE
const inetisalCount = {
    user:['ismile'],
    count: 1,
}

const setUser = (user)=> {
    return{
        type: ADD_USER,
        payload: user,
    }
}
const incrementCounterAction = ()=> {
    return{
        type: INCREMENT,
    }
}
const decrementCounterAction = ()=> {
    return{
        type: DECREMENT,
    }
}
const resetCounterAction = ()=> {
    return{
        type: RESET,
    }
}
const addValueAction = (value)=> {
    return{
        type: ADD_VALUE,
        payload: value,
    }
}
//reduser
const countReduser = (state=inetisalCount, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }            
        case RESET:
            return {
                ...state,
                count: 0,
            }            
        case ADD_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }            
        case ADD_USER:
            return {
                user:[...state.user,action.payload],
                count: state.count + 1,
            }            
        default:
            return state;
    }
}

//store
const store = createStore(countReduser);

store.subscribe(()=>{
    console.log(store.getState())
});

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(addValueAction(5));
// store.dispatch(addValueAction(5));

store.dispatch(setUser('rakib'));