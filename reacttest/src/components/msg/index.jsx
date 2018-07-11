import React, { Component } from 'react'
import Child1 from "./child1"
import Child2 from "./child2"


// 组件通讯：
// 1、状态提升（采用的props的calback函数）


export default class Msg extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            state:true
        }
    }
    cb(data){
        this.setState({
            name:data
        })
    }
    changeHandle(){
        this.setState({
            state:!this.state.state
        })
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                {/* <p>{this.state.name}</p> */}
                {this.state.state?<Child1 cb={this.cb.bind(this)}/>:<Child2 name={this.state.name}/>}
                <button onClick={this.changeHandle.bind(this)}>改变显示</button>
            </div>
        )
    }
}
