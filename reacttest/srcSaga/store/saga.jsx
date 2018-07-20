import { delay } from 'redux-saga'
import { put, takeEvery,all } from 'redux-saga/effects'

import {GetNum} from "../service/index.js"
// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
        let num=yield GetNum()
        console.log(num)
        yield put({ type: 'INITNUM',text:num })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('GETNUM', incrementAsync)
}


export default function* rootSaga() {
    yield all([
      watchIncrementAsync()
    ])
  }