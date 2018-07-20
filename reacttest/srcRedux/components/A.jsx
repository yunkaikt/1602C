import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {connentA} from "../store/connect"
class A extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            num:2
        }
        // props.dispatch(actions.init_num(this.state.num))
        props.dispatchAddNum(this.state.num)
    }
    clickHandle(){
        
        this.setState({
            num:this.state.num+1
        },()=>{
            this.props.dispatchAddNum(this.state.num)
        })
    }
    render() {
        return (
            <div>
                <h2>A组件</h2>
                <button onClick={()=>this.clickHandle()}>点击</button>
                <Link to="/tab/b">跳转B</Link>
            </div>
        )
    }
}

let AC=connentA()(A)

export default ()=><Route path="/tab/a" component={AC} />
