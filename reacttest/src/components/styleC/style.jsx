import React, { Component } from 'react';
import Style from './style.js';

let h3S={
    color:'red'
};

export default class StyleC extends Component {
    constructor(props){
        super(props);
        this.state={
            h:{
                color:'red'
            }
        };
    }
    
    render() {
        return (
            <div>
                <h3 style={Style.h}>样式的处理</h3>
            </div>
        );
    }
};
