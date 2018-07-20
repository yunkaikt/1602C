import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h4>天猫子组件</h4>
                <button onClick={this.props.dispatchAddNum}>点击改变num</button>
            </div>
        )
    }
}
