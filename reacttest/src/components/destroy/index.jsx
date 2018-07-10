import React, { Component } from 'react'
import Destroy from "./destroy"
export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            delete:""
        }
    }
    clickHandle(){
        this.setState({
            delete:this.refs.inputVal.value
        })
    }
    shouldComponentUpdate(newProps,newState){
        if(newState.delete=="销毁"){
            return true
        }else{
            return false
        }
    }
    render() {
        return (
            <div>
                <section>
                    <input type="text" ref="inputVal"/>
                    <button onClick={this.clickHandle.bind(this)}>执行命令</button>
                </section>
                <section>
                    {this.state.delete!=="销毁"&& <Destroy />}
                
                </section>
            </div>
        );
    }
}
