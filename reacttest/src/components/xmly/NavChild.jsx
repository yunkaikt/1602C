import React, { Component } from 'react';

export default class NavChild extends Component {
    render() {
        return (
            <li>
                {this.props.child.name}
            </li>
        );
    }
};
