import React , { Component } from 'react';
import Style from "../css/app.css"
import {
    Link
} from "react-router-dom"
import PropTypes from "prop-types"
class App extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props,contextTypes){
        super(props,contextTypes)
        console.log(contextTypes)
        this.state={
            router:contextTypes.router
        }
    }
    render () {
        return (
            <div className={Style.app}>
                {/* <h1>app根组件</h1>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                        <Link to="/list">列表页</Link>
                        <Link to="/tab">tab页</Link>
                    </li>
                </ul> */}
                {this.props.children}
            </div>
        )
      
    };
    componentDidMount(){
        // this.state.router.history.push("/")
    }
};
export default App;