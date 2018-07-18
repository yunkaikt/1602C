import React, { Component } from 'react'

 class Detail extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        // let str= props.location.search
        // let index=str.indexOf("=")
        // console.log(str.slice(index+1))
        this.state={
            data:this.props.getData[0].data
        }
    }
    go(){
        console.log(this.props)
        this.props.history.push("/list")
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.go()}>点击</button>
                <h3>{this.state.data.name}</h3>
                <div>
                    {this.state.data.content}
                </div>
            </div>
        )
    }
}

import getData from "../tool/hoc/getData"

export default class  extends Component {
    constructor(props){
        super(props)
        
        let str= props.location.search
        let index=str.indexOf("=")
    
        // this.state={
        //     id:str.slice(index+1)
        // }
        this.state={
            id:sessionStorage.getItem("id")
        }
    }
    render() {
        let Com=getData(Detail,[{url:"/api/detail",type:"post",data:{id:this.state.id}}])
        return <Com {...this.props}/>
    }
}
