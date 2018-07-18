import React, { Component } from 'react'
import GetData from "./hoc/getData"
class Child extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        console.log("child")
        // let el=this.props.getData.list.map((i)=>{
        //     return <li key={i.id}>{i.name}</li>
        // })
        return (
            <div>
                <ul>
                    {/* {el} */}
                </ul>
            </div>
        )
    }
}
export default GetData(Child,[{url:"/api/id1",type:"get"},{url:"/api/detail1",type:"post",data:{id1:""}}])