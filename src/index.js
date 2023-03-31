import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    switch(action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload}
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'SET_SUPPORTED':
            return {...state, supported: action.payload}
        case 'SET_COMMENT':
            return {...state, comment: action.payload}
        default: 
            return state
    }
};

const feedbackStore = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(
        logger
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={feedbackStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
