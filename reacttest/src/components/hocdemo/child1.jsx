import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"zhangsan"
        }
    }
    changehandle(){
        this.setState({
            name:"lisi"
        })
    }
    render() {
        console.log("child1")
        return (
            <div>
                <h2>天气很好</h2>
                <p>{this.state.name}</p>
                <button onClick={this.changehandle.bind(this)}>点击</button>
            </div>
        )
    }
}
