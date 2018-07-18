import React from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    // MemoryRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import config from "./test/config"
import App from "../components/app.jsx"
import createRoute from "./jsRouter"


export default function () {
    return (
        <Router>
            <App>
                <Switch>
                   {createRoute(config)}
                </Switch>
            </App>
        </Router>
    )
}

