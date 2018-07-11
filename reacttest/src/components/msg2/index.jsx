import React, { Component } from 'react'
import Child1 from "./child1"
import Child2 from "./child2"

import bus from "../../tool/bus"

// 组件通讯：
// 1、观察者模式（在同一时机出现数据通讯，不具备数据的存储，只有事件监听和回掉的执行）


export default class Msg extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            state:true
        }
        bus.$on("up",(data)=>{
            console.log(data)
        })
       
    }
    changeHandle(){
        this.setState({
            state:!this.state.state
        })
    }
    componentWillMount(){
        console.log("a")
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                {/* <p>{this.state.name}</p> */}
                {this.state.state?<Child1 />:<Child2 />}
                {/* <Child1 />
                <Child2 /> */}
                <button onClick={this.changeHandle.bind(this)}>改变显示</button>
            </div>
        )
    }
    componentDidMount(){
        // console.log(1)
       
    }
}
