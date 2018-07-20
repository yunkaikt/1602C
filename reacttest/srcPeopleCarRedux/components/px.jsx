import React, { Component } from 'react'
import {
    Route
}from "react-router-dom"
import { Flex} from 'antd-mobile';
import getData from "../tool/hoc/getData"
import style from "../css/px.css"
import store,{
    actions
} from "../store/index"
class Px extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     data:
        // }
        // console.log(props)
        store.dispatch(actions.changeTabState("px"))
        this.state={
            initlist:store.getState().initlist
        }
    }
    handle(type){
        var arr=null
        if(type=="+"){
            arr=[...this.state.initlist].sort((a,b)=>{
                return parseInt(b.price)- parseInt(a.price)
            })
        }else{
            arr=[...this.state.initlist].sort((a,b)=>{
                return parseInt(a.price)-parseInt(b.price)
            })
        }
        store.dispatch(actions.changeTabState(""))
        store.dispatch(actions.addShowList(arr))
       
        this.props.history.push("/list/content")
    }
    render() {
        return (
            <div>
              <ul className={style.list}>
                  <li onClick={()=>{this.handle("+")}}>价格最高</li>
                  <li onClick={()=>{this.handle("-")}}>价格最低</li>
              </ul>
            </div>
        )
    }
}

export default ()=><Route path="/list/px" component={Px} />