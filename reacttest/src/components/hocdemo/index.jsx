import React, { Component } from 'react'
import GetData from "./hoc/getData"
// import Child from "./child"
 class Index extends Component {

    constructor(props){
        super(props)
        this.state={
            data:null
        }
        console.log(this.props.getData)
    }
    render() {
        return (
            <div>
                hoc组件
                {/* {this.props.getData.obj.name} */}
                {/* <Child /> */}
            </div>
        )
    }
}

export default GetData(Index,[{url:"/api/data",type:"get"},{url:"/api/data1",type:"post",data:{}}])
