import React, { Component } from 'react'
import store from "../../store/index"

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"lisi"
        }
        store.state.name=this.state.name
    }

    changeState(){
        this.setState({
            name:"zhangsan"
        },()=>{
            store.state.name=this.state.name
        })
       
    }
   
    render() {
        return (
            <div>
                <h3>子组件1</h3>
                <button onClick={this.changeState.bind(this)}>点击</button>
            </div>
        )
    }
    componentDidMount(){
     
    }
}
