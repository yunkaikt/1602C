import React from 'react';
import {
    HashRouter as Router,
    Route,
    
} from 'react-router-dom';

import App from '../components/app';
import Index from '../components/index';
import ChooseProvince from '../components/chooseProvince';
import chooseListen from '../components/chooseListen';
function RouterConfig(){
    return <Router>
        <App>
            <Route exact path='/' component={Index}/>
            <Route exact path='/chooseProvince' component={ChooseProvince}/>
      
            <Route exact path='/chooseListen' component={chooseListen}/>
        </App>
    </Router>;
};

export default RouterConfig;
