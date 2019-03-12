import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];


const composeEnhancers = typeof window === 'object' && 
window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const composingMiddlewareAndDevTools = 
composeEnhancers(applyMiddleware(...middleWare));

const store = createStore(rootReducer, initialState, composingMiddlewareAndDevTools);


// const store = createStore(rootReducer, initialState, compose(
//   applyMiddleware(...middleWare),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

console.log(store.getState());

export default store;