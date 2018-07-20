import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
}from "react-router-dom"
import App from "../components/app"

import Tm from "../components/tm/parent"
// import Wm from "../components/wm/parent"



export default ()=>{
    return <Router>
            <App>
                <div>
                    <Link to="/tm">tm</Link>
                    <Link to="/wm">wm</Link>
                </div>
                   
                {/* <Switch> */}
                    <Route exact path="/" component={()=>{
                        return  <Redirect to="/tm" />
                    }}/>
                    <Tm />
                    {/* <Wm /> */}
                {/* </Switch> */}
            </App>
    </Router>
}
