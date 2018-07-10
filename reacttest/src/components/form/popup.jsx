import React, { Component } from 'react'

export default class Select extends Component {

    constructor(props) {
        super(props)
        this.state = {
            controller: false
        }
    }

    changeHandle() {
        this.setState({
            controller: !this.state.controller
        })
    }
    render() {


        let popup = <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        return (
            <div>
                <button onClick={this.changeHandle.bind(this)}>点击下拉</button>
                {this.state.controller && popup}
            </div>
        )
    }
}
