import React, { Component } from 'react'
import bus from "../../tool/bus"

// 数据的全局化思想（前端存储）（全局变量）:在不同时机出现的组件间通讯，可以做到数据的存储

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            // name:sessionStorage.getItem("name")
            name:global.name
        }
      
    }
    componentWillMount(){
        console.log("c")
    }
    
    render() {
        return (
            <div>
                <h3>子组件2</h3>
                <p>{this.state.name}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log(3)
      
    }
}
