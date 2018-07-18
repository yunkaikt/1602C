import React, { Component } from 'react'
import { Button,Flex,Icon} from 'antd-mobile';
import style from "../css/tab.css"
import store from "../store/index"
export default class Tab extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            state:store.state.tabState
        }
        store.subscript(()=>{
            this.setState({
                state:store.state.tabState
            })
        })
    }
    sortHandle(item){
        if(this.state.state==item){
            this.setState({
                state:""
            },()=>{
                // console.log(this.props)
                this.props.history.push(`/list/content`)
            })
        }else{
            this.setState({
                state:item
            },()=>{
                console.log(this.props)
                this.props.history.push(`/list/${item}`)
            })
        }
       
    }

    render() {
        return (
            <div className={style.tabTitle}>
                <Flex>
                <Flex.Item>
                    <Button type="primary" onClick={()=>this.sortHandle("px")}>排序<Icon type={this.state.state=="px"?"down":"up"} /></Button>
                </Flex.Item>
                <Flex.Item>
                    <Button type="primary" onClick={()=>this.sortHandle("pp")}>品牌<Icon type={this.state.state=="pp"?"down":"up"} /></Button>
                </Flex.Item>
                <Flex.Item>
                    <Button type="primary" onClick={()=>this.sortHandle("jg")}>价格<Icon type={this.state.state=="jg"?"down":"up"} /></Button>
                </Flex.Item>
                <Flex.Item>
                    <Button type="primary" onClick={()=>this.sortHandle("sx")}>筛选<Icon type={this.state.state=="sx"?"down":"up"} /></Button>
                </Flex.Item>
                </Flex>
                
            </div>
        )
    }
}
