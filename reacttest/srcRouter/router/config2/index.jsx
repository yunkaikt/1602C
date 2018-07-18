import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    // MemoryRouter as Router,
    Route,
    Switch
} from "react-router-dom"


import App from "../../components/app.jsx"
import config from "./config"
import createRouter from "./tool"

export default function () {
    return (
        <Router>
            <App>
                <Switch>
                    {createRouter(config)}
                </Switch>
            </App>
        </Router>
    )
}

