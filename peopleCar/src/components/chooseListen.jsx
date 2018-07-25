import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';
import getApi from "./hoc/getApi"

import style from "../css/index.css"
import NavHeader from "./common/navHeader"

class ChooseLicencePlate extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    let initdata = this.findCity(this.props.selectCity[0])
    this.state = {
      cityList: initdata.arr,
      letter: initdata.letter
    }
   
    console.log(initdata)
  }

  findCity(item) {
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
  scrollLetter(letter) {
    console.log()
    this.refs["province"].scrollTop=this.refs[letter].offsetTop-90
  }
  componentWillMount() {

  }
  componentDidMount(){
    this.scrollLetter(this.state.letter)
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
    // let $letter=this.props.provinceList.provinceArr.map((i,index)=>{
    //     return <li key={index} onClick={(e)=>{this.scrollHandle(i,index)}}>{i.letter}</li>
    // })
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
            <p>{this.props.selectCity[0] ? this.props.selectCity[0].name : null}</p>

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
            {/* {$letter} */}
          </ul>

        </main>
      </div>)
  }
}





export default connect(state => state)(getApi(ChooseLicencePlate, [{ url: "/api/provinceCity", type: "get" }]))



