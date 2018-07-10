import React, { Component } from 'react'

export default class For extends Component {
    constructor(props){
        super(props)

        this.state={
            list:[
                {
                    id:"1",
                    name:"zhangsan"
                },
                {
                    id:"2",
                    name:"lisi"
                },
                {
                    id:"3",
                    name:"wuwang"
                },
                {
                    id:"4",
                    name:"maliu"
                },
                {
                    id:"5",
                    name:"baiqqi"
                },  
                {
                    id:"6",
                    name:"heiba"
                },
                {
                    id:"7",
                    name:"chengjiu"
                }
            ]
        }
    }

    clickHandle(){
        this.setState({
            list:[
                {
                    id:"1",
                    name:"zhangsan"
                },
                {
                    id:"4",
                    name:"maliu"
                },
                {
                    id:"3",
                    name:"wuwang"
                },
                {
                    id:"5",
                    name:"baiqqi"
                },  
                {
                    id:"2",
                    name:"lisi"
                },
                {
                    id:"6",
                    name:"heiba"
                },
                {
                    id:"7",
                    name:"chengjiu"
                }
            ]
        })
    }

    render() {

        let el=this.state.list.map((i,index)=>{
            return <li key={index}>{i.name}</li>
        })  
        return (
            <div>
                <ul>
                    {el}
                </ul>
                <button onClick={this.clickHandle.bind(this)}>点击</button>
            </div>
        )
    }
}


