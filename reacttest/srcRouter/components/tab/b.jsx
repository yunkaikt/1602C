import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
export default class B extends Component {
    render() {
        return (
            <div>
                  <Link to="/tab/b/bb">tabbb</Link>
                tabB显示
                <div>{this.props.children}</div>
            </div>
        )
    }
}
