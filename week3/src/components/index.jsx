import React, { Component } from 'react';

import style from '../css/index';
import Cnum from './cnum';

import {IndexConnect} from "../redux/connect"
import RenderTrain from "./common/renderTrain"
import Select from "./common/select"

class Index extends Component {
    constructor(props){
        super(props)
        props.dispatchGetData()
    }
    
    render() {
        let el=this.props.data?(
            <div className={style.index}>
                <Select {...this.props}/>
               <RenderTrain {...this.props}/>
            </div>
        ):<p>加载中。。。</p>
        return el
    };
};


export default IndexConnect()(Index);
