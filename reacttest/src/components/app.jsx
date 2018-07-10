import React , { Component } from 'react';

import Style from '../css/app.css';
import Life from './lifeRound/parent';
import Event from './event/event';
// import Xmly from './xmly';
import StyleC from './styleC/style';
import Ifelse from './ifelse/index'
import Destroy from "./destroy/index"
// import For from "./for/index"
// import Extents from "./extents/index"
import Form from "./form/index"


class App extends Component {
    constructor ( props ) {
        super ( props );
     
    };
    
    render () {
        return <div className={Style.app}>
            {/* <h2>首页</h2> */}
            {/* <p>手动搭建webpack+react项目</p> */}
            {/* <Life/> */}
            {/* <Event /> */}
            {/* <Xmly /> */}
            {/* <StyleC /> */}
            {/* <Ifelse /> */}
            {/* <Destroy /> */}
            {/* <For /> */}
            {/* <Extents /> */}
            <Form />
        </div>;
    };
};
export default App;