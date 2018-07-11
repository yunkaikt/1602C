import React, { Component } from 'react'
import bus from "../../tool/bus"

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"lisi"
        }
       
        // sessionStorage.setItem("name",this.state.name)
        global.name=this.state.name
    }

    changeState(){
        this.setState({
            name:"zhangsan"
        },()=>{
            global.name=this.state.name
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
