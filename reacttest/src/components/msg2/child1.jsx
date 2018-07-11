import React, { Component } from 'react'
import bus from "../../tool/bus"

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"lisi"
        }
       
       
    }

    changeState(){
        this.setState({
            name:"zhangsan"
        },()=>{
            bus.$emit("up",this.state.name)
        })
       
    }
    componentWillMount(){
        console.log("b")
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
        console.log(2)
        bus.$emit("up",this.state.name)
    }
}
