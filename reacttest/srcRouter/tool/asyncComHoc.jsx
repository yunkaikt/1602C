import React, { Component } from 'react'

// 1、webpack+import (this.props.children为回掉函数的方式)
// export default class asyncComHoc extends Component {
//         constructor(props){
//             super(props)
//             this.load(props)
//             this.state={
//                 Com:null
//             }
//         }   
//         load(props){
//            props.load().then((Com)=>{
//                 console.log(Com.default)
//                 this.setState({
//                     Com:Com.default?Com.default:null
//                 })
//             })
//         }
//         render() {
//             if (!this.state.Com){
//                 return null
//             }else{
//                 return this.props.children(this.state.Com)
//             }
//         }
//     }
// 2、webpack+import (纯粹高阶组件的方式)
// export default function(loading){
//     return class AsyncComHoc extends Component {
//         constructor(props){
//             super(props)
           
//             this.state={
//                 Com:null
//             }
//             this.load()
//         }   
//         load(){
//             console.log(loading)
//             loading().then((Com)=>{
//                 console.log(Com)
//                 this.setState({
//                     Com:Com.default?Com.default:null
//                 })
//             })
//         }
//         render() {
//            let Com=this.state.Com
//            return Com?<Com />:null
//         }
//     }
// }


// 3、webpack+import+async (高阶函数)
// export default function(loading){
//     return class AsyncComHoc extends Component {
//         constructor(props){
//             super(props)
//             this.state={
//                 Com:null
//             }
//         }   
//         async componentWillMount(){
//             let Com=await loading()
//             this.setState({
//                 Com:Com.default?Com.default:null
//             })
//         }
//         render() {
//            let Com=this.state.Com
//            return Com?<Com />:null
//         }
//     }
// }


// 4、webpack+require.ensure (高阶函数)
export default function(loading){
    return class AsyncComHoc extends Component {
        constructor(props){
            super(props)
            this.state={
                Com:null
            }
        }   
        componentWillMount(){
            new Promise((resolve,reject)=>{
                require.ensure([], function(require) {
                  var c = loading().default;
                  resolve(c)
                });
              }).then((data)=>{
                this.setState({
                  Com:data
                })
              })
        }
        render() {
           let Com=this.state.Com
           return Com?<Com />:null
        }
    }
}