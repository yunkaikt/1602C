import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class List extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props,contextTypes){
        super(props,contextTypes)
        console.log(contextTypes)
    }
   
    render() {
        return (
            <div>
                <h4>list组件</h4>
            </div>
        )
    }
}
