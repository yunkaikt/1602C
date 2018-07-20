import actions from "./actions"
import { connect } from "react-redux"
import {
    W_ADDNUM_0002
} from "./actions_type"
export const connentWm = () => {
    let mapStateToProps = (state, selfProps) => {
        // console.log(selfProps)
        return state.wm
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {
            dispatchAddNum: () => {

                dispatch(actions[W_ADDNUM_0002]())
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}