import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
}from "react-router-dom"
import App from "../components/app"
import List from "../components/list"


export default ()=>{
    return <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={()=>{
                        return  <Redirect to="/list/content" />
                    }}/>
                    <List />
                    
                </Switch>
            </App>
    </Router>
}
