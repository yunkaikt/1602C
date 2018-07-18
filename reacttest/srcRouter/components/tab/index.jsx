import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
    Link,
    NavLink
} from "react-router-dom"

import style from "../../css/tab"

export default class Tab extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props,contextTypes){
        super(props,contextTypes)
        contextTypes.router.history.listen(()=>{
            console.log(222222)
        })
        // console.log(contextTypes)
    }
    render() {
        console.log(this.props.children)
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName={style.active} to="/tab/a">taba</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to="/tab/b">tabb</NavLink>
                    </li>
                </ul>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
