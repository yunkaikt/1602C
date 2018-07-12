import React, { Component } from 'react'
import Child1 from "./child1"
import Child2 from "./child2"

import store from "../../store/index"




export default class Msg extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            state:true
        }
      
        store.$subscript((state)=>{
           console.log(state.name)
       })
    }
    changeHandle(){
        this.setState({
            state:!this.state.state
        })
    }
   
    render() {
        return (
            <div>
                <h1>父组件</h1>
                {this.state.state?<Child1 />:<Child2 />}
                <button onClick={this.changeHandle.bind(this)}>改变显示</button>
            </div>
        )
    }
    componentDidMount(){
        
    }
  
}
