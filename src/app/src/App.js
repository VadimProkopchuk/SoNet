import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import PrimeReact from 'primereact/utils';

import Layout from "./components/Layout/Layout";
import rootReducer from "./store/reducers/rootReducer";

import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

PrimeReact.ripple = true;

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>
);
