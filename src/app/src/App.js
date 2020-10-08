import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Layout from "./components/Layout/Layout";
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(
    rootReducer,
    compose(applyMiddleware(reduxThunk))
);

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>
);
