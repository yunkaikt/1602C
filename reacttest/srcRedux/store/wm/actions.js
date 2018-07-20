import {
    W_ADDNUM_0002
} from "./actions_type"
// 动作分发 C
export default {
    [W_ADDNUM_0002](text) {
        return {
            type: W_ADDNUM_0002,
            text: text
        }
    }
}