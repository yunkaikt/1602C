import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom"

export default function createRouter(arr){
    function everyRouter(item,index){
        if(item.children&&item.children.length>0){
            let Com=item.component
            let renderCom=()=>
                <Com>
                    <Switch>
                        {
                            item.children.map((j,jndex)=>{
                                return everyRouter(j,index+""+jndex)
                            })
                        }
                    </Switch>
                </Com>
            return <Route key={index} path={item.path} component={renderCom} />
        }else{
            return <Route exact key={index} path={item.path} component={item.component} />
        }
    }
    return arr.map((item,index)=>{
        return everyRouter(item,index)
    })
}