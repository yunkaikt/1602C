import React, { Component } from 'react'
import {
    NavBar,
    Icon
} from "antd-mobile"
import {
    Link
} from "react-router-dom"



import getlocation from "../hoc/getlocation"
 class NavHeader extends Component {

    constructor(props){
        super(props)
        console.log(this.props.selectCity)
    }
    render() {
        console.log(this.props.leftContent)
        return (
            <div>
                 <NavBar
                    mode="light"
                    leftContent={this.props.leftContent(this.props.selectCity[0].name)}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={this.props.rightContent}
                    ></NavBar>
            </div>
        )
    }
}



export default NavHeader