import React, { Component } from 'react'

export default function(Com,url){
    return class  extends Component {
        constructor(props){
            super(props)
            this.state={
                getData:null
            }
            fetch(url).then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
                this.setState({
                    getData:data
                })
            })
        }
        render() {
            let el=this.state.getData?<Com getData={this.state.getData}/>:null
            return el
        }
    }
}




