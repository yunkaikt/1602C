import React, { Component } from 'react'
import {
    Route
}from "react-router-dom"
import { Flex} from 'antd-mobile';
import getData from "../tool/hoc/getData"
import store from "../store/index"
import style from "../css/px.css"
class Pp extends Component {
    constructor(props){
        super(props)
        // console.log(store.state.remoteList)
        this.state={
            data:this.initData(store.state.remoteList),
            remoteData:store.state.remoteList
        }
        store.state.tabState="pp"
    }
    handle(type){
        let result=[]
        this.state.remoteData.some((arr)=>{
        
            var state=arr.some((i)=>{
                if(i.carClass==type){
                    result=i.carList
                    return true
                }else{
                    false
                }
            })
           
            return state
           
        })
        
        store.state.tabState=""
        store.state.showlist=result.filter((i)=>{
            return i.price!=""
        })
        this.props.history.push("/list/content")
    }
    initData(data){
        let result=[]
        data.forEach(arr => {
            arr.forEach((i)=>{
                result.push(i.carClass)
            })
        });
        return result
    }
    render() {
        console.log(this.state.data)
        let el=this.state.data.map((item,index)=>{
            return <li key={index} onClick={()=>this.handle(item)}>{item}</li>
        })
        return (
            <div>
              <ul className={style.list}>
                  {el}
              </ul>
            </div>
        )
    }
}

export default ()=><Route path="/list/pp" component={Pp} />