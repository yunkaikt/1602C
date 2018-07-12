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
// import Form from "./form/index"
// import Msg from "./msg/index"
import Msg2 from "./msg2/index"
import Msg3 from "./msg3/index"
import Msg4 from "./msg4/index"
import Msg5 from "./msg5/index"
import HocDemo from "./hocdemo/index"

var global={}

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
            {/* <Form /> */}
            {/* <Msg /> */}
            {/* <Msg2 /> */}
            {/* <Msg3 /> */}
            {/* <Msg4 /> */}
            {/* <Msg5 /> */}
            <HocDemo />
        </div>;
    };
};
export default App;