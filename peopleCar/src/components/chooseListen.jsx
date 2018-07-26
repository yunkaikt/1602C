import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';
import getApi from "./hoc/getApi"

import style from "../css/index.css"
import NavHeader from "./common/navHeader"
import {
  ADDLISTENADDR,
  actions
} from "../redux/index"

// 路由对应的第三页面，进行上牌地点的选择
class ChooseLicencePlate extends Component {
  constructor(props) {
    super(props)
    // 根据当前默认的上牌城市，进行默认省份，以及省份所对应的城市数据的筛选
    let initdata = this.findCityInit(this.props.selectCity[0])
    this.state = {
      cityList: initdata.arr,   //渲染的城市数组
      letter: initdata.letter   //当前省份对应的首字
    }
  }
  // 根据省份id，筛选对应的城市数组
  findCity(item) {
    let citydata = this.props.getData[0].city
    let arr =  citydata[item.id]
     this.setState({
      cityList:arr
     })
  }
  // 根据当前默认的上牌城市，进行默认省份所对应的城市数据的筛选
  findCityInit(item) {
    let citydata = this.props.getData[0].city
    let arr = [], currentId
    Object.keys(citydata).forEach((j) => {
      citydata[j].forEach((i) => {
        if (i.id == item.id) {
          arr = citydata[j]
          currentId = j
        }
      })
    })
    return { arr, letter: this.findLetter(currentId) }
  }
  // 根据当前默认的上牌城市，进行默认省份所对应的首字母的筛选
  findLetter(id) {
    let provinceArr = this.props.getData[0].provinceArr
    let letter
    provinceArr.forEach((i) => {
      i.province.forEach((j) => {
        if (j.id == id) {
          letter = i.letter
        }
      })
    })
    return letter
  }

  // 选择上牌城市，进行redux中数据的改变
  chooseCity(item){
    this.props.dispatch(actions[ADDLISTENADDR](item))
  }
  // 点击字母，进行省份的自动滑动
  scrollHandle(item){
    this.refs["province"].scrollTop=this.refs[item.letter].offsetTop-90
    this.findProvinceCity(item)
  }
  
  // 根据字母获取省份列表，根据列表中第一个省份，获取相应的城市数据
  findProvinceCity(item){
    let provinceId=item.province[0].id
    let arr=this.props.getData[0].city[provinceId]
    this.setState({
      cityList:arr
    })
  }
  componentDidMount(){
    // 根据默认省份所对应的字母进行省份滚动条的滚动
    this.refs["province"].scrollTop=this.refs[this.state.letter].offsetTop-90
  }

  render() {
    // // 渲染省份
    let $province = this.props.getData[0].provinceArr.map((i, index) => {
      return <section key={index}>
        <h4 ref={i.letter}>{i.letter}</h4>
        <ul>
          {i.province.map((j, index) => <li key={index} className={this.state.classState == j.id ? style.activeColor : null} onClick={() => { this.findCity(j) }}>{j.name}</li>)}
        </ul>
      </section>
    })
    // // 根据省份渲染城市

    let $city = this.state.cityList.map((i, index) => {
      return (
        <li key={index} onClick={() => { this.chooseCity(i) }}>{i.name}</li>
      )
    })


    // // 渲染字母
    let $letter=this.props.getData[0].provinceArr.map((i,index)=>{
        return <li key={index} onClick={(e)=>{this.scrollHandle(i,index)}}>{i.letter}</li>
    })
    let rightContent = [
    ]
    let leftContent = (data) => {
      return [<Link to="/chooseProvince" key="0"><Icon type="left" /></Link>, <span key="1">上牌城市</span>]
    }
    return (
      <div className={style.licencePlate}>
        <NavHeader {...this.props} leftContent={leftContent} rightContent={rightContent} />
        <section className={style.cityAddressLicen}>
          <Flex wrap="wrap">
            <p>{this.props.listenAddr ? this.props.listenAddr.name: null}</p>

          </Flex>
        </section>
        <main className={style.licencePlateMain}>
          <aside className={style.licencePlateAside} ref="province">
            {$province}
          </aside>

          <ul className={style.licencePlateCity}>
            {$city}
          </ul>
          <ul className={style.licencePlateLetter}>
            {$letter}
          </ul>

        </main>
      </div>)
  }
}





export default connect(state => state)(getApi(ChooseLicencePlate, [{ url: "/api/provinceCity", type: "get" }]))



