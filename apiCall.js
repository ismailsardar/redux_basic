// api=https://jsonplaceholder.typicode.com/todos

const { default: axios } = require("axios");
const { createStore,applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;

//const
const GET_REQUEST_LODING = 'GET_REQUEST_LODING';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_FAILED = 'GET_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todo';

//STATE
const initalState = {
    todos:[],
    isloding: false,
    error: null,
}

//action
const todosLoding =()=>{
    return {
        type: GET_REQUEST_LODING,
    }
}
const todosError =(error)=>{
    return {
        type: GET_FAILED,
        payload: error,
    }
}
const todosSuccess =(todo)=>{
    return {
        type: GET_SUCCESS,
        payload: todo,
    }
}

//reduse
const todosReduser = (state=initalState, action)=>{
    switch (action.type) {
        case GET_REQUEST_LODING:
            return {
                ...state,
                isloding: true,
            };
        case GET_SUCCESS:
            return {
                ...state,
                isloding: false,
                todos: action.payload,
            };
        case GET_FAILED:
            return {
                ...state,
                isloding: false,
                error: action.payload,
            };
    
        default:
            return state;
    }
}

//fatch Data with axious
const fatchData = ()=>{
    return (dispatch)=>{
        dispatch(todosLoding());
        axios.get(API_URL)
        .then((res)=>{
            const todos = (res.data);
            const filter = todos.map((todo)=>todo.title);
            // console.log(filter);
            dispatch(todosSuccess(filter));
        })
        .catch((error)=>{
            const errors = (error.message);
            dispatch(todosError(errors));
        })
    }
}

//store
const store = createStore(todosReduser,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fatchData());