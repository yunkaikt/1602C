import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
       
    }

    render() {
        return (
            <div>
                <h3>子组件2</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
