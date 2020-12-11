import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import searchReducer from './reducers/searchReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(searchReducer, devToolsEnhancer());

import App from './App.js';
// import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);