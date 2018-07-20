// 数据逻辑层（改变数据，处理逻辑的地方）
// 纯函数（不做数据的产生和存储，只做数据的改变和逻辑的处理）
import initstate from "./state"
import {
    W_ADDNUM_0002
} from "./actions_type"
const reducer = (state = initstate, action) => {

    const { type, text } = action
    switch (type) {
        case W_ADDNUM_0002:
            {
                let newState = {...state, ... { num: state.num + 1 } }
                return newState
            }

        default:
            return state
    }
}


export default reducer