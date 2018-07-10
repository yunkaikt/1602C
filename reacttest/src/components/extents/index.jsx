import React, { Component } from 'react'
import Child from "./child"

export default class Index extends Component {
    render() {
        let el=<p>父组件传递的节点</p>
        return (
            <div>
                <Child>
                    {el}
                </Child>
            </div>
        )
    }
}
