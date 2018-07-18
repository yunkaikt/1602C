import React, { Component } from 'react'
import {
    Route
}from "react-router-dom"
import { Flex} from 'antd-mobile';

import store from "../store/index"
class Content extends Component {
    constructor(props){
        super(props)
       
        this.state={
            data:store.state.showlist
        }
        
    }
    render() {
        let el=this.state.data.map((i,index)=>{
            return  <Flex key={index}>
                        <Flex.Item>{i.carName}</Flex.Item>
                        <Flex.Item>{i.price}</Flex.Item>
                    </Flex>
        })
        return (
            <div>
               {el}
            </div>
        )
    }
}

export default ()=><Route path="/list/content" component={Content} />