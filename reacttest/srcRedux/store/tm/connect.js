import actions from "./actions"
import { connect } from "react-redux"
import {
    T_ADDNUM_0001
} from "./actions_type"
export const connentTm = () => {
    let mapStateToProps = (state, selfProps) => {
        console.log(state)
        return state.tm
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {
            dispatchAddNum: () => {

                dispatch(actions[T_ADDNUM_0001]())
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}