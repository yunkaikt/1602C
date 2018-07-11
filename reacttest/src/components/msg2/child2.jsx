import React, { Component } from 'react'
import bus from "../../tool/bus"
export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:""
        }
        console.log(2)
        bus.$on("up",(data)=>{
            console.log(data)
            this.setState({
                name:data
            })
        })
    }
    componentWillMount(){
        console.log("c")
    }
    
    render() {
        return (
            <div>
                <h3>子组件2</h3>
                <p>{this.state.name}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log(3)
      
    }
}
