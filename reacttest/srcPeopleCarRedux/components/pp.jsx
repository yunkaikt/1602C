import React, { Component } from 'react'
import {
    Route
}from "react-router-dom"
import { Flex} from 'antd-mobile';
import getData from "../tool/hoc/getData"
import store,{
    actions
} from "../store/index"
import style from "../css/px.css"
class Pp extends Component {
    constructor(props){
        super(props)
        
        this.state={
            data:this.initData(store.getState().remoteList),
            remoteData:store.getState().remoteList
        }
        store.dispatch(actions.changeTabState("pp"))
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
        
        store.dispatch(actions.changeTabState(""))
       let arr=result.filter((i)=>{
            return i.price!=""
        })
        store.dispatch(actions.addShowList(arr))
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