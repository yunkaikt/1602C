import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"
import Child from "./child.jsx"
import {connentWm} from "../../store/wm/connect"
class WmParent extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <h2>外卖</h2>
                <p>{this.props.num}</p>
                <Child {...this.props}/>
            </div>
        )
    }
}


export default ()=><Route path="/wm" component={connentWm()(WmParent)} />
