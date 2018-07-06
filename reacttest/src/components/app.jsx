import React , { Component } from 'react';

import Style from '../css/app.css';
import Life from './lifeRound/parent';
import Event from './event/event';

class App extends Component {
    constructor ( props ) {
        super ( props );
     
    };
    
    render () {
        return <div className={Style.app}>
            <h2>首页</h2>
            {/* <p>手动搭建webpack+react项目</p> */}
            {/* <Life/> */}
            <Event />

        </div>;
    };
};
export default App;