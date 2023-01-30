// /redux require
const {createStore} = require('redux')

//TYPE declear
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'
// state 
const initalCounter = {
    count: 0,
}
const initalUser = {
    users:[
        {name:'Ismile sardar'},
    ]
}

//action
const incrementCounter = ()=> {
    return{
        type: INCREMENT,
    }
}
const decrementCounter = ()=> {
    return{
        type: DECREMENT,
    }
}
const addUser = ()=> {
    return{
        type: ADD_USER,
        payload:{
            name:"Rakib Islam"
        }
    }
}

//creat reduser for actions
const creatReduser = (state=initalCounter,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count:state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count - 1,
            }        
        default:
            return state;
    }
}

//store
const store = createStore(creatReduser);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());