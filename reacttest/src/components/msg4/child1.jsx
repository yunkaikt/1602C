import React, { Component } from 'react'
import bus from "../../tool/buss"

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"lisi"
        }
       
        bus.$emit("up","name",this.state.name)
    }

    changeState(){
        this.setState({
            name:"zhangsan"
        },()=>{
            bus.$emit("up","name",this.state.name)
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
