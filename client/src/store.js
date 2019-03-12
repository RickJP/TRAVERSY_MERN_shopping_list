import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];


// const composeEnhancers = typeof window === 'object' && 
// window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));


// const store = createStore(rootReducer, initialState, compose(
//   applyMiddleware(...middleWare),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

console.log(store.getState());

export default store;