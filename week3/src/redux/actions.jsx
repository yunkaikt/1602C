import {
    ADDNUM,
    GETDATA,
    SETDATA,
    CHECKEDLIST
} from './type';

import {GetData}  from "../service/index"

let actions={
    [SETDATA](text){
        return {
            type:SETDATA,
            text:text
        };
    },
    [GETDATA](text){
        return (dispatch)=>{
            GetData().then((data)=>{
                dispatch(actions[SETDATA](data))
            })
        }
    },
    [CHECKEDLIST](text){
        return {
            type:CHECKEDLIST,
            text:text
        };
    }
};

export default actions