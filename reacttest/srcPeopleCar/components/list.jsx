import React, { Component } from 'react'
import {
    Route,
    Switch,
    Redirect
}from "react-router-dom"
import Tab from "./tab"

import getData from "../tool/hoc/getData"
import store from "../store/index"
import PropTypes from "prop-types"

import Content from "./content"
import Px from "./px"
import Pp from "./pp"

 class List extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
     constructor(props,contextTypes){
         super(props,contextTypes)
         this.state={
             router:contextTypes.router
         }
         let initdata=this.dataHandle(props.getData[0].data)
         store.state.remoteList=props.getData[0].data
         store.state.initlist=initdata
         store.state.showlist=initdata
     }
     dataHandle(data){
        let result=[]
        data.forEach(arr => {
            arr.forEach((i)=>{
                let item=i.carList.filter((i)=>{
                    return i.price!=""
                })
               result.push(...item) 
            })
        });
        return result
    }
    render() {
        return (
            <div>
                <Tab {...this.state.router}/>
                {this.props.children}
            </div>
        )
    }
}

let ListH=getData(List,[{url:"/api/carClass",type:"get"}])

export default ()=>{
    return <Route path="/list" render={()=>{
        return <ListH>
            {/* <Switch> */}
                <Content />
                <Px />
                <Pp/>
            {/* </Switch> */}
        </ListH>
    }} />
}