import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import style from "../../css/chooseCard.css"
import {
    Link
} from "react-router-dom"
export default class componentName extends Component {
    render() {

        return (
            <ul className={style.chooseCard}>
                <li>请选择上牌城市</li>
                <li><Link to="/chooseListen">{this.props.listenAddr?this.props.listenAddr.name:null}</Link></li>
            </ul>
        )
    }
}
