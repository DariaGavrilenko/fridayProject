

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "./reducer";



const rootReducer = combineReducers({
state: reducer    
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>



// @ts-ignore
window.store = store;
