import React, { Component } from 'react'
import {
    Route,
    Switch,
    Redirect
}from "react-router-dom"
import Tab from "./tab"

import getData from "../tool/hoc/getData"
import store,{actions} from "../store/index"
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
             router:contextTypes.router,
             state:null
         }
         
         store.dispatch(actions.getListData())

         store.subscribe(()=>{
             if(store.getState().showlist){
                 this.setState({
                     state:true
                 })
             }
         })
     }
    render() {
        let el=this.state.state?<div>
                    <Tab {...this.state.router}/>
                    {this.props.children}
                </div>:null
        return el
    }
}

// let ListH=getData(List,[{url:"/api/carClass",type:"get"}])
let ListH=List

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