import { configureStore, combineReducers, ReducerType, createStore } from '@reduxjs/toolkit';
import { checkboxReducer } from './checkboxReducer';
import { sortReducer } from './sortReducer';
import { createStoreHook } from 'react-redux';

const rootReducer = combineReducers({
    checkboxReducer,
    sortReducer,
})

export const store = configureStore({reducer: rootReducer})