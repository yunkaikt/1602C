import React, { Component } from 'react'
import NavHeader from "./common/navHeader"
import {
    Icon
} from "antd-mobile"
import {
    Link
} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    ADDSELECTCITY,
    actions
} from "../redux/index"
import ChooseCard from "./common/chooseCard"
import ChooseCity from "./common/chooseCity"
import CPRender from "./common/chooseProvinceRender"

import getApi from "./hoc/getApi"
import getlocation from "./hoc/getlocation"
class ChooseProvince extends Component {
    
    render() {
        console.log(this.props)
        let rightContent=[
        ]
        let leftContent=(data)=>{
            return  [<Link to="/" key="0"><Icon type="left" /></Link>,<span key="1">选择城市</span>]
        }
        return (
            <div>
                <NavHeader {...this.props} leftContent={leftContent} rightContent={rightContent}/>
                <ChooseCard {...this.props}/>
                <ChooseCity {...this.props}/>
                <CPRender {...this.props}/>
            </div>
        )
    }
}

let newCom=getApi(getlocation(ChooseProvince),[{url:"/api/city",type:"get"}])

export default connect(state=>state)(newCom)
