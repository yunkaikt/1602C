import React from 'react';

import Index from "../../components/index"

import List from "../../components/list.jsx"
import Tab from "../../components/tab"
import Taba from "../../components/tab/a"
import Tabb from "../../components/tab/b"
import Tabbb from "../../components/tab/bb"
import TabIndex from "../../components/tab/aindex"


export default [
    {
        path:"/",
        component:Index
    },
    {
        path:"/list",
        component:List
    },
    {
        path:"/tab",
        component:Tab,
        children:[
            {
                path:"/tab/",
                component:TabIndex
            },
            {
                path:"/tab/a",
                component:Taba
            },
            {
                path:"/tab/b",
                component:Tabb,
                children:[
                    {
                        path:"/tab/b/bb",
                        component:Tabbb
                    },
                ]
            }
        ]
    }
]