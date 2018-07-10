import React, { Component } from 'react'

export default class IfC extends Component {
    constructor(props){
        super(props)
        this.state={
            state:false
        }
    }
    clickHandle(){
        this.setState({
            state:!this.state.state
        })
    }
    render() {
        // 条件渲染第一种：ifelse（switch） (可以做多条件的渲染)
        // if(this.state.state){
        //     var el=<div>为true时渲染的</div>
        // }else{
        //     var el=<div>为false时渲染的</div>
        // }
        // 三元运算符：（只能做两种条件的渲染）

        // let el=this.state.state?<div>为true时渲染的</div>:<div>为false时渲染的</div>

        // 逻辑与(只能做开关，一个节点的显示与否)
        let el=this.state.state&&<div>为true时渲染的</div>
        return (
            <div>
                {
                  el
                }
                <button onClick={this.clickHandle.bind(this)}>点击</button>
            </div>
        )
    }
}
