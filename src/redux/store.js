import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import storage from 'redux-persist/lib/storage'
import {persistReducer } from 'redux-persist'

import AuthReducer from './reducers/AuthReducer'

const reducers =persistReducer({storage: storage,key:'dev1.1.2' }, combineReducers({
    AuthReducer,
}));

let middleware = [];
  middleware = [...middleware, thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
