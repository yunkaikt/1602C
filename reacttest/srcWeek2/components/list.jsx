import React, { Component } from 'react'
import GetData from "../tool/hoc/getData"
import {
    Link
} from "react-router-dom"
import style from "../css/list.css"

class List extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            list:this.props.getData[0].list
        }
    }
    goHandle(id){
        sessionStorage.setItem("id",id)
        this.props.history.push("/detail")
    }
    render() {
        let $el=this.state.list.map((i)=>{
            return <li className={style.list} key={i.id}>
                {/* <Link to={{
                pathname: '/detail', 
                search: `?id=${i.id}`,
                state: { name: "zhangsan" }
                }}>{i.name}</Link> */}
                <b onClick={()=>this.goHandle(i.id)}>{i.name}</b>
                <span>{i.time}</span>
            </li>
        })
        return (
            <div>
                <h4>列表</h4>
                <ul>
                    {$el}
                </ul>
            </div>
        )
    }
}
export default GetData(List,[{url:"/api/data",type:"get"}])