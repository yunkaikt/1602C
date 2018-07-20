import {
    T_ADDNUM_0001
} from "./actions_type"
// 动作分发 C
export default {
    [T_ADDNUM_0001](text) {
        return {
            type: T_ADDNUM_0001,
            text: text
        }
    }
}