import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
}from "react-router-dom"
import App from "../components/app"
import List from "../components/list"
import Detail from "../components/detail"

export default ()=>{
    return <Router>
            <App>
                <Switch>
                    <Route path='/list' component={List}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/' component={()=>{
                        return <Redirect to="/list" />
                    }}/>
                    
                </Switch>
            </App>
    </Router>
}
