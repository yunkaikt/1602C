import React from "react"
import {
    Route,
    Switch
} from "react-router-dom"
function createRoute(arr){
    function createEveryRouter(item,index){
        if(item.children&&item.children.length>1){
            let Com=item.component
            return <Route key={index} path={item.path} render={()=>{
                return  <Com>
                                <Switch>
                                {
                                    item.children.map((i,jndex)=>{
                                        return createEveryRouter(i,index+""+jndex)
                                    })
                                }
                                </Switch>
                        </Com>
            }} />
        }else{
            return <Route key={index} exact path={item.path} component={item.component} />
        }
    }
    return arr.map((every,index)=>createEveryRouter(every,index))
}


export default createRoute