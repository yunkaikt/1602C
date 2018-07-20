import React, { Component } from 'react'

export default class C extends Component {
    render() {
        return (
            <div>
                <h3>c组件显示num值：{this.props.num}</h3>
            </div>
        )
    }
}
