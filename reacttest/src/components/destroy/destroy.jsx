import React, { Component } from 'react'

let style={
    display:"flex",
    justifyContent:"center",
    background:"red"
}

export default class Destroy extends Component {
    render() {
        return (
            <div style={style}>
                我是一个即将被销毁的组件
            </div>
        );
    }
    componentWillUnmount(){
        console.log("组件销毁了")
    }
}
