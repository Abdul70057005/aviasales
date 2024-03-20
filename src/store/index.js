import { configureStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit';
import { checkboxReducer } from './checkboxReducer';
import { sortReducer } from './sortReducer';
import { thunk } from 'redux-thunk'
import { getSearchId } from './getSearchId';

const rootReducer = combineReducers({
    checkboxReducer,
    sortReducer,
    getSearchId
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware', store.getState())
    return result
}

export const store = configureStore(
    {reducer: rootReducer}, 
    composeEnhancers(applyMiddleware(loggerMiddleware, thunk))
    
)