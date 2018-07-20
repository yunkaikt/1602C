import {
    createStore,
    applyMiddleware
} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"

let initState={
    num:null
}

 let reducer = (state = initState, action) => {
    const {type,text}=action
    switch (type) {
        case 'INITNUM':{
            return {...state,...{num:text}}
        }
        case 'ADDNUM':{
            console.log(state.num+1)
            return {...state,...{num:state.num+1}}
        } 
        default:
            return state
    }
}

export const actions={
    add_num(){
        return {
            type:"ADDNUM"
        }
    }
}
let sagaMiddleware= createSagaMiddleware()

let store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store
