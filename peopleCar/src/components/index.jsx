import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from '../css/index';
import {
    Icon
} from "antd-mobile"
import {
    Link
} from "react-router-dom"
import getApi from "./hoc/getApi"
import getlocation from "./hoc/getlocation"
import NavHeader from "./common/navHeader"
class Index extends Component {
    render() {
        let rightContent=[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
        ]
        let leftContent=(data)=>{
            return  <Link to="/chooseProvince" key="0">{data}</Link>
        }
        return (
            <div className={style.index}>
               <NavHeader {...this.props} leftContent={leftContent} rightContent={rightContent}/>
            </div>
        );
    };
};


let newCom=getApi(getlocation(Index),[{url:"/api/city",type:"get"}])

export default connect((state)=>state)(newCom);
