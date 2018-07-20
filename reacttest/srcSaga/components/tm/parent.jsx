import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"
import Child from "./child.jsx"
import {connect} from "react-redux"
class TmParent extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <h2>天猫</h2>
                <p>{this.props.num}</p>
                <Child {...this.props}/>
            </div>
        )
    }
}


export default ()=><Route path="/tm" component={connect(state=>state)(TmParent)} />
