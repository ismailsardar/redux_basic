const { createStore , applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

//product Constant
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';

//PRODUCT inetial Value
const initalProduct = {
    product:['AppleX10'],
    countProduct: 1,
}

//set product item
const setProduct = (product)=>{
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}
const getProduct = ()=>{
    return {
        type: GET_PRODUCT,
    }
}

//product Reduser
const productReduser = (state=initalProduct, action)=>{
    switch (action.type) {
        case ADD_PRODUCT:            
            return{
                product:[...state.product,action.payload],
                countProduct: state.countProduct + 1,
            };
        case GET_PRODUCT:            
            return{
                ...state,
            };
    
        default:
            return state;
    }
}

//Store creat
const store = createStore(productReduser,applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch(setProduct('pen'));
store.dispatch(getProduct());
store.dispatch(setProduct('Computer'));