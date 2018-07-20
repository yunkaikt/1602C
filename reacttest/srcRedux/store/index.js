import {
    createStore,
    combineReducers
} from "redux"

// import reducer from "./reducer"

// export { default as actions }
// from "./actions"


import tmReducer from "./tm/index"
import wmReducer from "./wm/index"
console.log(tmReducer)
let reducer = combineReducers({
    tm: tmReducer,
    wm: wmReducer
})

export default createStore(reducer)