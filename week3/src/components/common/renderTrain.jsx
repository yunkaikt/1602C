import React, { Component } from 'react'


import { Table, Icon, Divider } from 'antd';



const columns = [{
    title: '车次',
    dataIndex: 'name',
    key: 'id',
    render: text => <a href="javascript:;">{text}</a>,
  }];

  
export default class RenderTrain extends Component {
    constructor(props){
      super(props)
     
    }
    
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.props.renderList} />
            </div>
        )
    }
}

