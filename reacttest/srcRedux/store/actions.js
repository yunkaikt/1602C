import {
    ADDNUM,
    INITNUM
} from "./actions_type"
// 动作分发 C
export default {
    [ADDNUM](text) {
        return {
            type: ADDNUM,
            text: text
        }
    },
    [INITNUM](text) {
        return {
            type: INITNUM,
            text: text
        }
    }
}