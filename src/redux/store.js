import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer/cartReducer';
import bagReducer from './reducers/bagReducer/bagReducer';
//import createSagaMiddleware from '@redux-saga/core';
//import rootSaga from './sagas';
import thunk from 'redux-thunk';

//const sagaMiddleware = createSagaMiddleware();

//const middleware = applyMiddleware(sagaMiddleware);
const middleware = applyMiddleware(thunk);
const composedEnhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), );
const allReducers = combineReducers({cartReducer, bagReducer});
const store = createStore(allReducers, composedEnhancers);

//sagaMiddleware.run(rootSaga);

export default store;