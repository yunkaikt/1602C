import {
    createStore,
    applyMiddleware
} from "redux"


import thunkMiddleware from 'redux-thunk'

import axios from "axios"

const initState = {
    remoteList: null,
    initlist: null,
    showlist: null,
    tabState: ""
}

let reducer = (state = initState, action) => {
    console.log(action)
    const { type, text } = action
    switch (type) {
        case 'ADDREMOTELIST':
            {
                return {...state, ... { remoteList: text } }
            }
        case 'ADDINITLIST':
            {
                return {...state, ... { initlist: text } }
            }
        case 'ADDSHOWLIST':
            {
                return {...state, ... { showlist: text } }
            }
        case 'CHANGETABSTATE':
            {
                return {...state, ... { tabState: text } }
            }
        default:
            return state
    }
}


export const actions = {
    // 获取初始化数据并存储
    getListData() {
        return (dispatch) => {
            console.log(dispatch)

            function dataHandle(data) {
                let result = []
                data.forEach(arr => {
                    arr.forEach((i) => {
                        let item = i.carList.filter((i) => {
                            return i.price != ""
                        })
                        result.push(...item)
                    })
                });
                return result
            }
            axios.get("/api/carClass").then((data) => {
                console.log(data)
                let initdata = dataHandle(data.data.data)
                dispatch(actions.addRemoteList(data.data.data))
                dispatch(actions.addInitList(initdata))
                dispatch(actions.addShowList(initdata))
            })
        }
    },
    addRemoteList(text) {
        return {
            type: "ADDREMOTELIST",
            text: text
        }
    },
    addInitList(text) {

        return {
            type: "ADDINITLIST",
            text: text
        }
    },
    addShowList(text) {
        return {
            type: "ADDSHOWLIST",
            text: text
        }
    },
    changeTabState(text) {
        return {
            type: "CHANGETABSTATE",
            text: text
        }
    },
}

export default createStore(reducer, applyMiddleware(thunkMiddleware))