import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import store from "../store/index"
import {
    connect
} from "react-redux"

import A from "./A"
import B from "./B"
import C from "./C"

class Tab extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            num:props.num
        }
     
    }
    componentWillReceiveProps(newProps){
        this.setState({
            num:newProps.num
        })
    }
    render() {
        return (
            <div>
                <h2>tab组件</h2>
                <C num={this.state.num} />
                {this.props.children}
            </div>
        )
    }
}

let select=(state)=>{
    return state
}

let TabC=connect(select)(Tab)

export default ()=><Route path="/tab" component={()=>{
    return <TabC>
            <A />  
            <B />        
    </TabC>
}} />
