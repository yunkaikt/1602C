import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';

import {Provider}  from "react-redux"
import store from "./store/index"
ReactDOM.render(
    <Provider store={store}>
       <Router />
    </Provider>, 
    document.getElementById('root')
);
