import React, { Component } from 'react';

export default class Event extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'lisi'
        };
        // this.clickHandle=this.clickHandle.bind(this);
        // this.clickHandles=()=>{this.clickHandle();};
    }
    // componentWillMount(){
    //     this.setState({
    //         name:'zhangsan'
    //     });
    // }
    clickHandle(item){
        console.log(this);
        this.setState({
            name:'wangwu'
        });
    }
    render() {
        return (
            <div>
                <h3>事件</h3>
                <p>{this.state.name}</p>
                {/* <button onClick={this.clickHandle.bind(this)}>点击</button> */}
                {/* <button onClick={()=>this.clickHandle(123)}>点击</button> */}
                <button onClick={this.clickHandles}>点击</button>
            </div>
        );
    }
}
