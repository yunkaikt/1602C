import React , { Component } from 'react';

import Style from "../css/app.css"
class App extends Component {
    constructor ( props ) {
        super ( props );
     
    };
    
    render () {
        return <div className={Style.app}>
           {this.props.children}
        </div>;
    };
};
export default App;