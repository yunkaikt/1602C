import React, { Component } from 'react';
import navStyle from '../../css/xmly/tab.css';

import NavChild from './NavChild';

export default class Tab extends Component {
    render() {
        let {navData}=this.props;
        return (
            <ul className={navStyle.navUl}>
                {navData!==undefined?navData.map(item=>{return <NavChild key={item.id} child={item}/>;}):null}
            </ul>


        );
    }
};
