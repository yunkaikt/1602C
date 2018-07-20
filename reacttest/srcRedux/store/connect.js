import { actions } from "../store/index"
import { connect } from "react-redux"
import {
    ADDNUM,
    INITNUM
} from "./actions_type"
export const connentA = () => {
    let mapStateToProps = (state, selfProps) => {
        // console.log(selfProps)
        return state
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {
            dispatchAddNum: (item) => {

                dispatch(actions[INITNUM](item))
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}

export const connentB = () => {
    let mapStateToProps = (state, selfProps) => {
        return {
            name: state.name
        }
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {

        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}

export const connentTab = () => {
    let mapStateToProps = (state, selfProps) => {
        return state
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {

        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}