import React , { Component } from 'react';
import Style from "../css/app.css"
import {
    Link
} from "react-router-dom"
class App extends Component {
    
    render () {
        return (
            <div className={Style.app}>
                <h1>app根组件</h1>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                        <Link to="/list">列表页</Link>
                        <Link to="/tab">tab页</Link>
                        <Link to="/prompt">prompt页</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
      
    };
};
export default App;