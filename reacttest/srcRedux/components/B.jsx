import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {connentB} from "../store/connect"
class B extends Component {
    constructor(props){
        super(props)
       console.log(props)
        this.state={
            name:props.name
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            name:newProps.name
        })
    }
    render() {
        return (
            <div>
                <h2>B组件</h2>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

let BC=connentB()(B)
export default ()=><Route path="/tab/b" component={BC} />
