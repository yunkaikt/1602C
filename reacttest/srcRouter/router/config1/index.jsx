import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    // MemoryRouter as Router,
    Route,
    Switch,
    Prompt,
    Link
} from "react-router-dom"

import Index from "../../components/index"
import App from "../../components/app.jsx"
// import List from "../../components/list.jsx"
// import Tab from "../../components/tab"
import Taba from "../../components/tab/a"
import Tabb from "../../components/tab/b"

// 组件懒加载：
// 1、webpack+import()(this.props.children为回掉函数的方式)
import Load from "../../tool/asyncComHoc"

// let List=function(){
//     return <Load load={()=>import("../../components/list.jsx")}>
//         {(Com)=><Com />}
//     </Load>
// }

// let Tab=function(){
//     return <Load load={()=>import("../../components/tab")}>
//         {(Com)=><Com />}
//     </Load>
// }


// 2、webpack+import (纯粹高阶组件的方式)
// 3、webpack+import+async (高阶函数)
// let List=Load(()=>import("../../components/list.jsx"))
// let Tab=Load(()=>import("../../components/tab"))



// 4、webpack+require.ensure (高阶函数)
let List=Load(()=>require("../../components/list.jsx"))
let Tab=Load(()=>require("../../components/tab"))


// 组件的渲染：
// component：有状态组件和无状态组件皆可渲染；
// render:无状态组件
// children:一般作为路由匹配成功后的其他操作

export default function () {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path='/list' component={List} />
                    <Route path='/tab' render={tabRouter} />
                    <Route path='/prompt' render={()=>{
                        return (
                            <div>
                            这里是prompt
                            <Prompt message="Are you sure you want to leave?"/>
                            <Link to="/">跳转</Link>
                            </div>
                        )
                    }}/>

                </Switch>
            </App>
        </Router>
    )
}

const tabRouter = () => {
    return <Tab>
        <Route path='/tab/a' component={Taba} />
        <Route path='/tab/b' component={Tabb} />
    </Tab>
}
