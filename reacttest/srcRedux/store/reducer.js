// 数据逻辑层（改变数据，处理逻辑的地方）
// 纯函数（不做数据的产生和存储，只做数据的改变和逻辑的处理）
import initstate from "./state"
import {
    ADDNUM
} from "./actions_type"
const reducer = (state = initstate, action) => {
    console.log(state, action)
    const { type, text } = action
    switch (type) {
        case ADDNUM:
            {
                console.log(22222)
                let newState = {...state, ... { num: state.num + 1 } }
                console.log(newState)
                return newState
            }

        default:
            return state
    }
}


export default reducer