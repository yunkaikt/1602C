import React, { Component } from 'react'
import GetData from "./hoc/getData"
class Child extends Component {
    render() {
        let el=this.props.getData.list.map((i)=>{
            return <li key={i.id}>{i.name}</li>
        })
        return (
            <div>
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
export default GetData(Child,"/api/data")