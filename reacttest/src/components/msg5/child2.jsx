import React, { Component } from 'react'
import store from "../../store/index"

// 数据的全局化思想（前端存储）（全局变量）:在不同时机出现的组件间通讯，可以做到数据的存储

export default class Child extends Component {
    constructor(props){
        super(props)
        console.log(store.state)
        this.state={
          
            name:store.state.name
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
