import React, { Component } from 'react'
import GetData from "./hoc/getData"
import Child from "./child"
import Child1 from "./child1"
 class Index extends Component {

    constructor(props){
        super(props)
        this.state={
            data:null
        }
        console.log(this.props.getData)
    }
    render() {
        console.log("parent")
        return (
            <div>
                hoc组件
                {/* {this.props.getData.obj.name} */}
                <Child />
                <Child1 />
            </div>
        )
    }
}

export default GetData(Index,[{url:"/api/id",type:"get"},{url:"/api/detail",type:"post",data:{id:""}}])
