import React, { Component } from 'react'
import { Checkbox,Button } from 'antd';
const CheckboxGroup = Checkbox.Group;



import style from "../../css/select.css"

export default class Select extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            checkedList: [this.initData()[0]],
            checkAll: false,
            plainOptions:this.initData()
          };
          props.dispatchCheckedList(this.state.checkedList)
    }
    initData(){
      return this.props.data.map((i)=>{
        return i.type
      })
    }
    render() {
        return (
          <div className={style.select}>
              <b>车次类型：</b>
              <Button
                onClick={this.onCheckAllChange}
                type={this.state.checkAll?"primary":""}
                className={style.selectCheckall}
              >
                全部
              </Button>
            <CheckboxGroup options={ this.state.plainOptions} value={this.state.checkedList} onChange={this.onChange} />
          </div>
        );
      }
    
      onChange = (checkedList) => {
        console.log(checkedList)
        this.setState({
          checkedList,
          checkAll: checkedList.length === this.state.plainOptions.length,
        },()=>{
          this.props.dispatchCheckedList(this.state.checkedList)
        });
      }
    
      onCheckAllChange = (e) => {
        if(this.state.checkAll){
          this.setState({
            checkedList: [],
            checkAll:false,
          },()=>{
            this.props.dispatchCheckedList(this.state.checkedList)
          });
        }else{
          this.setState({
            checkedList:this.state.plainOptions,
            checkAll:true,
          },()=>{
            this.props.dispatchCheckedList(this.state.checkedList)
          });
        }
        
      }
    
}



