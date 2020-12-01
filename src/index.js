import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import store from './store';

import App from './App.js';
// import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        {/* <Provider> */}
            <Router>
                <App />
            </Router>
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById("root")
);