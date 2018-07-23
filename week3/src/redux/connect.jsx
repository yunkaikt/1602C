import {connect} from 'react-redux';
import {GETDATA,CHECKEDLIST} from "./type"
import actions from "./actions"
export const IndexConnect=()=>{
    let mapStateToProps = (state, selfProps) => {
        
        return state
    }
    let mapDispatchToProps = (dispatch, selfProps) => {
        return {
            dispatchGetData: () => {
                dispatch(actions[GETDATA]())
            },
            dispatchCheckedList: (data) => {
                dispatch(actions[CHECKEDLIST](data))
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)
}