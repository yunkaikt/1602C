

import React from "react"
import Index from "../components/index"
import List from "../components/list.jsx"
import Tab from "../components/tab"
import Taba from "../components/tab/a"
import Tabb from "../components/tab/b"

export default [
        {
                path: "/",
                component: Index
        },
        {
                path: "/tab",
                component: Tab,
                children: [
                        {
                                path: "/tab/a",
                                component: Taba
                        },
                        {
                                path: "/tab/b",
                                component: Tabb
                        }
                ]
        },
        {
                path: "/list",
                component: List
        },
]