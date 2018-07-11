import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"lisi"
        }
        this.props.cb(this.state.name)
    }

    changeState(){
        this.setState({
            name:"zhangsan"
        },()=>{
            this.props.cb(this.state.name)
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
}
