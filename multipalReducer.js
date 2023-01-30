const { createStore, combineReducers } = require("redux");

//product Constant
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';

//cart Constant
const ADD_CART = 'ADD_CART';
const GET_CARTS = 'GET_CARTS';

//PRODUCT inetial Value
const initalProduct = {
    product:[],
    countProduct: 0,
}
//CART inetial Value
const initalCart = {
    cart:[],
    countCart: 0,
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

//set cart item
const setCart = (cart)=>{
    return {
        type: ADD_CART,
        payload: cart,
    }
}
const getCart = ()=>{
    return {
        type: GET_CARTS,
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
//product Reduser
const cartReduser = (state=initalCart, action)=>{
    switch (action.type) {
        case ADD_CART:            
            return{
                cart:[...state.cart,action.payload],
                countCart: state.countCart + 1,
            };
        case GET_CARTS:            
            return{
                ...state,
            };
    
        default:
            return state;
    }
}

//combing Reduser
const rootReduser = combineReducers({
    productR: productReduser,
    cartR: cartReduser,
});

//Store creat
const store = createStore(rootReduser);
store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch(setProduct('pen'));
store.dispatch(setProduct('Computer'));
store.dispatch(getProduct());
console.log('=====.....======');
store.dispatch(setCart('Drop'));
store.dispatch(getCart());